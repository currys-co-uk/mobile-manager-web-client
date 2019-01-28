import * as Immutable from 'immutable'
import { IDevice } from '../../../_shared/api/models/IDevice';
import { IDeviceLoadDevicesFailAction, IDeviceLoadDevicesSucessAction } from "./devicesActions";
import { DevicesActionTypesEnum } from "../constants/devicesActionTypes";

export const receiveDevicesSucess = (devices: Immutable.List<IDevice>): IDeviceLoadDevicesSucessAction => ({
  type: DevicesActionTypesEnum.LoadDevicesSuccess,
  payload: {
    devices
  },
});

export const receiveDevicesFail = (): IDeviceLoadDevicesFailAction => ({
  type: DevicesActionTypesEnum.LoadDevicesFail
});
