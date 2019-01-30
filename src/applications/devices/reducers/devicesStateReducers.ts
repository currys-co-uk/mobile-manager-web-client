import { combineReducers } from "redux";
import { IDevicesStoreState } from "../model/IDevicesStoreState";
import { devicesStore } from "./internalReducers/devicesStore";
import { devicesFilterStore } from "./internalReducers/devicesFilterStore";
import { deviceInitializedStore } from "./internalReducers/deviceInitializeStore";
import { appiumDeviceLogStore } from "./internalReducers/appiumDeviceLogStore";
import { seleniumDeviceConfigStore } from "./internalReducers/seleniumDeviceConfigStore";

export const devicesAppReducer = combineReducers<IDevicesStoreState>({
  devices: devicesStore,
  devicesFilters: devicesFilterStore,
  appiumDeviceLogs: appiumDeviceLogStore,
  seleniumDeviceConfig: seleniumDeviceConfigStore,
  initialized: deviceInitializedStore,
});
