import { IDevice } from "../../../_shared/api/models/IDevice";
import * as Immutable from 'immutable';
import { Action } from "redux";
import { DevicesActionTypesEnum } from "../constants/devicesActionTypes";


export interface IDeviceLoadDevicesSucessAction extends Action {
  type: DevicesActionTypesEnum.LoadDevicesSuccess
  payload: {
    devices: Immutable.List<IDevice>
  }
}

export interface IDeviceLoadDeviceSucessAction extends Action {
  type: DevicesActionTypesEnum.LoadDeviceSuccess
  payload: {
    device: IDevice
  }
}

export interface IDeviceLoadDevicesAction extends Action {
  type: DevicesActionTypesEnum.LoadDevices
}

export interface IDeviceLoadDevicesFailAction extends Action {
  type: DevicesActionTypesEnum.LoadDevicesFail
}
