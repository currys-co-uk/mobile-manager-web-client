import * as React from "react";
import { connect } from "react-redux";
import { IStore } from "../../../_shared/models/IStore";
import { DevicesDataGrid, IDevicesDataGridCallBackProps, IDevicesDataGridDataProps } from "../components/DevicesDataGrid";
import { IDevice } from "../../../_shared/api/models/IDevice";
import { loadDevices } from "../actionCreators/publicActionCreator";
import { Dispatch } from "../../../!types/Dispatcher";
import { createDeviceReservation } from "../../reservation/actionCreators/publicActionCreator";
import { IReservation } from "../../../_shared/api/models/IReservation";

function mapStateToProps(store: IStore): IDevicesDataGridDataProps {
  const columns = [
    {title: 'Image', width: 2, align: 'center'},
    {title: 'Device ID', width: 6, align: 'left'},
    {title: 'Type', width: 2, align: 'left'},
    {title: 'Name', width: 4, align: 'left'},
    {title: 'AppiumEndpoint', width: 6, align: 'center'},
    {title: 'Status', width: 2, align: 'left'},
    {title: 'Reservation', width: 4, align: 'left'},
  ];

  return {
    columns,
    devices: store.devicesStore.devices,
    filters: store.devicesStore.devicesFilters
  }
}

function mapDispatchToProps(dispatch: Dispatch): IDevicesDataGridCallBackProps {
  return {
    createReservation: (device: IDevice) => {
      const requestedReservationDevice: IReservation = {requestedDevices: [{deviceId: device.id}]};
      dispatch(createDeviceReservation(requestedReservationDevice));
    },
    refreshDevices: () => {
      dispatch(loadDevices());
    }
  }
}

const DashboardDataGridContainer: React.ComponentClass = connect(mapStateToProps, mapDispatchToProps)(DevicesDataGrid);
export { DashboardDataGridContainer as DevicesDataGrid };
