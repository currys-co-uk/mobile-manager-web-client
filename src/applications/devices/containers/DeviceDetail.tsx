import * as React from 'react';
import { IStore } from "../../../_shared/models/IStore";
import { RouteComponentProps, withRouter } from "react-router";
import { DeviceDetail, IDeviceDetailCallbackProps, IDeviceDetailDataProps } from "../components/DeviceDetail";
import { IDevice } from "../../../_shared/api/models/IDevice";
import { connect } from "react-redux";
import { IReservationApplied } from "../../../_shared/api/models/IReservationApplied";
import { Dispatch } from "../../../!types/Dispatcher";
import { loadDevice, loadAppiumDeviceLog, loadSeleniumDeviceConfig } from "../actionCreators/publicActionCreator";

export interface IDeviceRouteParams {
  deviceId: string;
  tab: string;
}

function mapStateToProps(state: IStore, ownProps: RouteComponentProps<IDeviceRouteParams>): IDeviceDetailDataProps {
  const device = state.devicesStore.devices.find((item: IDevice) => item.id === ownProps.match.params.deviceId);
  const reservations = state.reservationStore.reservationsApplied;
  let deviceReservation: IReservationApplied | null = null;
  for (const reservation of reservations.toArray()) {
    if (reservation.reservedDevices.some(t => t.deviceId === device.id)) {
      deviceReservation = reservation;
    }
  }

  return {
    device,
    reservationApplied: deviceReservation ? deviceReservation : undefined,
    appiumLog: state.devicesStore.appiumDeviceLogs.get(device.id),
    seleniumConfig: state.devicesStore.seleniumDeviceConfig.get(device.id)
  }
}

function mapDispatchToProps(dispatch: Dispatch): IDeviceDetailCallbackProps {
  return {
    reloadDevice: (device: IDevice) => dispatch(loadDevice(device)),
    loadAppiumLog: (deviceId: string) => dispatch(loadAppiumDeviceLog(deviceId)),
    loadSeleniumConfig: (deviceId: string) => dispatch(loadSeleniumDeviceConfig(deviceId))
  }
}

const DeviceDetailContainer: React.ComponentClass = withRouter(connect(mapStateToProps, mapDispatchToProps)(DeviceDetail));
export { DeviceDetailContainer as DeviceDetail }
