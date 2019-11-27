import * as Immutable from 'immutable';
import { IDevice } from '../../../_shared/api/models/IDevice';
import { DeviceFilterType, IDeviceFilterOperation } from "../reducers/internalReducers/devicesFilterStore";
import { ISeleniumConfig } from 'src/_shared/api/models/ISeleniumConfig';

export interface IDevicesStoreState {
  readonly devices: Immutable.List<IDevice>;
  readonly devicesFilters: Immutable.Map<DeviceFilterType, IDeviceFilterOperation>;
  readonly appiumDeviceLogs: Immutable.Map<string, string>;
  readonly seleniumDeviceConfig: Immutable.Map<string, ISeleniumConfig>;
  readonly initialized: boolean;
}
