import * as React from 'react';
import { IStore } from "../../../_shared/models/IStore";
import { IReserveDeviceFormCallbackProps, IReserveDeviceFormDataProps, MultiReserveDeviceForm } from "../components/MultiReserveDeviceForm";
import { connect } from "react-redux";
import { Dispatch } from "../../../!types/Dispatcher";
import { IRequestedDevice } from "../../../_shared/api/models/IRequestedDevice";
import { createDeviceReservation } from "../actionCreators/publicActionCreator";
import { IModalCallbackProps } from "../../../_shared/components/Modal";

function mapStateToProps(state: IStore): IReserveDeviceFormDataProps {
  return {
    devices: state.devicesStore.devices.toArray()
  }
}

function mapDispatchToProps(dispatch: Dispatch, ownProps: IModalCallbackProps): IReserveDeviceFormCallbackProps {
  return {
    onCreateReservation: (requestedDevices: IRequestedDevice[]) =>  dispatch(createDeviceReservation({requestedDevices})),
    onCloseCallback: ownProps.onCloseCallback
  }
}

const MultiReserveDeviceFormContainer: React.ComponentClass<IModalCallbackProps> = connect(mapStateToProps, mapDispatchToProps)(MultiReserveDeviceForm);

export { MultiReserveDeviceFormContainer as ReserveDevicesForm }
