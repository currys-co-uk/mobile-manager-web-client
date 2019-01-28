import { IDevice } from '../../../_shared/api/models/IDevice';
import { IDeviceLoadDeviceSucessAction } from "./devicesActions";
import { DevicesActionTypesEnum } from "../constants/devicesActionTypes";

export const receiveDeviceSucess = (device: IDevice): IDeviceLoadDeviceSucessAction => ({
  type: DevicesActionTypesEnum.LoadDeviceSuccess,
  payload: {
    device
  },
});
