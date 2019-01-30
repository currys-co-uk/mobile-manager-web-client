import { DeviceClient } from "../../../_shared/api/client/DeviceClient";
import { runtimeConfig } from "../../../runtimeConfig";
import { IDevice } from "../../../_shared/api/models/IDevice";
import { loadDevicesAction } from "./internalActionCreators/loadDevices";
import { loadDeviceAction } from "./internalActionCreators/loadDevice";
import { addDeviceFilterAction, removeDeviceFilterAction, resetDeviceFilterAction, updateDeviceFilterAction } from "../actions/filterDevices";
import { DeviceFilterType, IDeviceFilterOperation } from "../reducers/internalReducers/devicesFilterStore";
import { AppiumLogClient } from "../../../_shared/api/client/AppiumLogClient";
import { loadAppiumDeviceLogAction } from "./internalActionCreators/loadAppiumDeviceLog";
import { loadSeleniumDeviceConfigAction } from "./internalActionCreators/loadSeleniumDeviceConfig";
import { SeleniumDeviceConfigClient } from "../../../_shared/api/client/SeleniumDeviceConfigClient";

const deviceClient = new DeviceClient({apiEndpoint: runtimeConfig.mobileManagerApi});
const appiumLogClient = new AppiumLogClient({apiEndpoint: runtimeConfig.mobileManagerApi});
const seleniumConfigClient = new SeleniumDeviceConfigClient({apiEndpoint: runtimeConfig.mobileManagerApi});

export const loadDevices = () => loadDevicesAction(deviceClient)();
export const loadDevice = (device: IDevice) => loadDeviceAction(deviceClient, device);

export const addDeviceFilter = (filterType: DeviceFilterType, filter: IDeviceFilterOperation) => addDeviceFilterAction(filterType, filter);
export const updateDeviceFilter = (filterType: DeviceFilterType, filter: IDeviceFilterOperation) => updateDeviceFilterAction(filterType, filter);
export const removeDeviceFilter = (filterType: DeviceFilterType) => removeDeviceFilterAction(filterType);
export const resetDeviceFilter = () => resetDeviceFilterAction();
export const loadAppiumDeviceLog = (deviceId: string) => loadAppiumDeviceLogAction(appiumLogClient, deviceId)();
export const loadSeleniumDeviceConfig = (deviceId: string) => loadSeleniumDeviceConfigAction(seleniumConfigClient, deviceId)();
