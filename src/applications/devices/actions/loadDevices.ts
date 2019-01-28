import { DevicesActionTypesEnum } from "../constants/devicesActionTypes";
import { IDeviceLoadDevicesAction } from "./devicesActions";

export const loadDevices = (): IDeviceLoadDevicesAction => ({
  type: DevicesActionTypesEnum.LoadDevices
});
