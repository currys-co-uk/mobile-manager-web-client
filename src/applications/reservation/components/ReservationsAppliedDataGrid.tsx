import * as React from 'react';
import * as Immutable from 'immutable';
import { DataGridColumn } from "../../devices/components/DataGrid/DataGridColumn";
import { DataGridCell } from "../../devices/components/DataGrid/DataGridCell";
import { IReservationApplied } from "../../../_shared/api/models/IReservationApplied";
import { clearInterval, setInterval } from "timers";
import { NavLink } from "react-router-dom";

interface IGridColumnData {
  title: string;
  width: number;
  align: string;
}

export interface IReservationsAppliedDataGridCallBackProps {
  removeReservation(reservation: IReservationApplied): void;

  refreshReservations(): void;
}

export interface IReservationsAppliedDataGridDataProps {
  columns: IGridColumnData[];
  appliedReservations: Immutable.List<IReservationApplied>;
}

interface IReservationsAppliedDataGridState {
  timer: NodeJS.Timeout;
}

interface IReservationsAppliedDataGridProps extends IReservationsAppliedDataGridDataProps, IReservationsAppliedDataGridCallBackProps {
}

const refreshInterval = 10000;

export class ReservationsAppliedDataGrid extends React.PureComponent<IReservationsAppliedDataGridProps, IReservationsAppliedDataGridState> {

  constructor(props: IReservationsAppliedDataGridProps) {
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
          {this.props.appliedReservations.map((reservation: IReservationApplied, i) => {
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
                  {reservation.reservedDevices.map((device, index) => {
                    return (<div key={index} className="reservations__applied-devices">
                      <NavLink to={'Device/' + device.deviceId + '/basic'}>{device.deviceId}</NavLink>
                    </div>);
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
