import * as React from 'react';
import * as Immutable from 'immutable';
import { DataGridColumn } from "../../devices/components/DataGrid/DataGridColumn";
import { DataGridCell } from "../../devices/components/DataGrid/DataGridCell";
import { IReservationQueued } from "../../../_shared/api/models/IReservationQueued";
import { clearInterval, setInterval } from "timers";
import { DeviceTypeName } from "../../../_shared/api/enums/DeviceType";
import { ReactNode } from "react";
import { IDeviceProperty } from "../../../_shared/api/models/IDeviceProperty";
import { IRequestedDevice } from "../../../_shared/api/models/IRequestedDevice";

interface IGridColumnData {
  title: string;
  width: number;
  align: string;
}

export interface IReservationsQueuedDataGridCallBackProps {
  removeReservation(reservation: IReservationQueued): void;

  refreshReservations(): void;
}

export interface IReservationsQueuedDataGridDataProps {
  columns: IGridColumnData[];
  QueuedReservations: Immutable.List<IReservationQueued>;
}

interface IReservationsQueuedDataGridState {
  timer: NodeJS.Timeout;
}

interface IReservationsQueuedDataGridProps extends IReservationsQueuedDataGridDataProps, IReservationsQueuedDataGridCallBackProps {
}

const refreshInterval = 10000;

export class ReservationsQueuedDataGrid extends React.PureComponent<IReservationsQueuedDataGridProps, IReservationsQueuedDataGridState> {

  constructor(props: IReservationsQueuedDataGridProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.refreshReservations();
    this.setState({
      timer: setInterval(() => this.props.refreshReservations(), refreshInterval)
    })
  }

  public componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  public render(): JSX.Element {
    return (
      <div className="datagrid">
        <div className="datagrid__head datagrid__head">
          {this.props.columns.map((column, index) => {
            return (
              <DataGridColumn
                key={index}
                title={column.title}
                width={column.width}
              />
            );
          })}
        </div>

        <div className="datagrid__body-container">
          {this.props.QueuedReservations.map((reservation: IReservationQueued, i) => {
            return (
              <div key={i} className="datagrid__row">
                <DataGridCell
                  align={this.props.columns[0].align}
                  width={this.props.columns[0].width}
                  title={this.props.columns[0].title}
                >
                  {reservation.id}
                </DataGridCell>
                <DataGridCell
                  align={this.props.columns[1].align}
                  width={this.props.columns[1].width}
                  title={this.props.columns[1].title}
                >
                  {reservation.dateCreated}
                </DataGridCell>
                <DataGridCell
                  align={this.props.columns[2].align}
                  width={this.props.columns[2].width}
                  title={this.props.columns[2].title}
                >
                  {reservation.requestedDevices.map((device: IRequestedDevice) => {
                    const requestedById = device.deviceId !== undefined;
                    const requestedByType = device.deviceType !== undefined;
                    const requestedByProperties = device.properties && device.properties.length > 0;
                    const requestedByName = device.deviceName !== undefined;
                    const line: ReactNode[] = [];
                    if (requestedByName) {
                      line.push(<div className="reservations__requested-by" key={line.length}>DeviceName: {device.deviceName}</div>);
                    }

                    if (requestedByProperties && device.properties) {
                      device.properties.map((prop: IDeviceProperty) => {
                        line.push(<div className="reservations__requested-by" key={line.length}>{prop.key}: {prop.value}</div>)
                      })
                    }

                    if (requestedByType && device.deviceType) {
                      line.push(<div className="reservations__requested-by" key={line.length}>Device Type: {DeviceTypeName.get(device.deviceType)}</div>);
                    }

                    if (requestedById) {
                      line.push(<div className="reservations__requested-by" key={line.length}>DeviceId: {device.deviceId}) </div>);
                    }

                    return line;
                  })}
                </DataGridCell>
                <DataGridCell
                  align={this.props.columns[3].align}
                  width={this.props.columns[3].width}
                  title={this.props.columns[3].title}
                >
                  <div
                    className="reservations__remove-reservation"
                    onClick={() => this.props.removeReservation(reservation)}
                  >
                    Remove
                  </div>
                </DataGridCell>
              </div>
            );
          })
          }
        </div>
      </div>
    );
  }
}
