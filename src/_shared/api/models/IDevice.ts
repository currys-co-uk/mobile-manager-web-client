import { DeviceStatus } from '../enums/DeviceStatus';
import { DeviceType } from '../enums/DeviceType';
import { IDeviceProperty } from './IDeviceProperty';

export interface IDevice {
  id: string
  name: string
  available: boolean
  type: DeviceType;
  status: DeviceStatus;
  appiumEndpoint: string;
  properties: IDeviceProperty[];
}
