import * as React from 'react';
import * as Immutable from 'immutable';
import { DataGridCell } from "./DataGrid/DataGridCell";
import { DeviceImageCell } from "./DataGrid/DeviceImageCell";
import { IDevice } from "../../../_shared/api/models/IDevice";
import { clearInterval, setInterval } from "timers";
import { DeviceTypeName } from "../../../_shared/api/enums/DeviceType";
import { DataGridColumn } from "./DataGrid/DataGridColumn";
import { NavLink } from "react-router-dom";
import { DeviceStatusCell } from "./DataGrid/DeviceStatusCell";
import { Panel } from "../../../_shared/components/Panel";
import { DeviceFilters } from "../containers/DeviceFilters";
import { DeviceFilterType, IDeviceFilterOperation } from "../reducers/internalReducers/devicesFilterStore";

interface IGridColumnData {
  title: string;
  width: number;
  align: string;
}

export interface IDevicesDataGridCallBackProps {
  createReservation(device: IDevice): void;
  refreshDevices(): void;
}

export interface IDevicesDataGridDataProps {
  columns: IGridColumnData[];
  devices: Immutable.List<IDevice>;
  filters: Immutable.Map<DeviceFilterType, IDeviceFilterOperation>;
}

interface IDevicesDataGridState {
  timer: NodeJS.Timeout;
}

interface IDevicesDataGridProps extends IDevicesDataGridDataProps, IDevicesDataGridCallBackProps {
}

const refreshInterval = 10000;

export class DevicesDataGrid extends React.PureComponent<IDevicesDataGridProps, IDevicesDataGridState> {
  constructor(props: IDevicesDataGridProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.refreshDevices();
    this.setState({
      timer: setInterval(() => this.props.refreshDevices(), refreshInterval)
    })
  }

  public componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  public render(): JSX.Element {

    let filteredDevices = this.props.devices.toArray();
    for (const filterPredicate of this.props.filters.valueSeq().toArray()) {
      filteredDevices = filteredDevices.filter(x => x[filterPredicate.property].toLowerCase().includes(filterPredicate.value.toLowerCase()));
    }

    return (
      <Panel
        caption={'Devices'}
      >
        <DeviceFilters />
        <div className="datagrid">
          <div className="datagrid__head">
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
            {filteredDevices.map((device: IDevice, i) => {
              return (
                <div key={i} className="datagrid__row">
                  <DataGridCell
                    align={this.props.columns[0].align}
                    width={this.props.columns[0].width}
                    title={this.props.columns[0].title}
                  >
                    <DeviceImageCell
                      type={device.type}
                    />
                  </DataGridCell>
                  <DataGridCell
                    align={this.props.columns[1].align}
                    width={this.props.columns[1].width}
                    title={this.props.columns[1].title}
                  >
                    <NavLink to={'Device/' + device.id + '/basic'}>
                      {device.id}
                    </NavLink>
                  </DataGridCell>
                  <DataGridCell
                    align={this.props.columns[2].align}
                    width={this.props.columns[2].width}
                    title={this.props.columns[2].title}
                  >
                    {DeviceTypeName.get(device.type)}
                  </DataGridCell>
                  <DataGridCell
                    align={this.props.columns[3].align}
                    width={this.props.columns[3].width}
                    title={this.props.columns[3].title}
                  >
                    {device.name}
                  </DataGridCell>
                  <DataGridCell
                    align={this.props.columns[4].align}
                    width={this.props.columns[4].width}
                    title={this.props.columns[4].title}
                  >
                    {device.appiumEndpoint === '' ? '—' : device.appiumEndpoint}
                  </DataGridCell>
                  <DataGridCell
                    align={this.props.columns[5].align}
                    width={this.props.columns[5].width}
                    title={this.props.columns[5].title}
                  >
                    <DeviceStatusCell
                      status={device.status}
                    />
                  </DataGridCell>
                  <DataGridCell
                    align={this.props.columns[6].align}
                    width={this.props.columns[6].width}
                    title={this.props.columns[6].title}
                  >
                    <div
                      className="dashboard__add-reservation"
                      onClick={() => this.props.createReservation(device)}>
                      Add Reservation
                    </div>
                  </DataGridCell>
                </div>
              );
            })
            }
          </div>
        </div>
      </Panel>
    );
  }
}
