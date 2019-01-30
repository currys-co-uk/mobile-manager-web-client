import * as Immutable from 'immutable';
import { IDevice } from '../../../_shared/api/models/IDevice';
import { DeviceFilterType, IDeviceFilterOperation } from "../reducers/internalReducers/devicesFilterStore";

export interface IDevicesStoreState {
  readonly devices: Immutable.List<IDevice>;
  readonly devicesFilters: Immutable.Map<DeviceFilterType, IDeviceFilterOperation>;
  readonly appiumDeviceLogs: Immutable.Map<string, string>;
  readonly seleniumDeviceConfig: Immutable.Map<string, string>;
  readonly initialized: boolean;
}
