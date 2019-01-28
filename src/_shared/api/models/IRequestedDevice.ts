import { DeviceType } from "../enums/DeviceType";
import { IDeviceProperty } from "./IDeviceProperty";

export interface IRequestedDevice {
  deviceId?: string;
  deviceType?: DeviceType;
  deviceName?: string;
  properties?: IDeviceProperty[];
  reservationRefId?: string;
}
