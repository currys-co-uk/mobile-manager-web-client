import {
  IDeviceLoadDevicesAction, IDeviceLoadDevicesFailAction,
  IDeviceLoadDevicesSucessAction, IDeviceLoadDeviceSucessAction
} from "../devicesActions";
import { IDeviceFilterAddFilterAction, IDeviceFilterRemoveFilterAction, IDeviceFilterResetFilterAction, IDeviceFilterUpdateFilterAction } from "../devicesFilterActions";
import { IAppiumDeviceLogSucessAction } from "../deviceAppiumActions";
import { ISeleniumDeviceConfigSucessAction } from "../deviceSeleniumActions";

export type DevicesActionTypes =
  | IDeviceLoadDevicesAction
  | IDeviceLoadDevicesSucessAction
  | IDeviceLoadDevicesFailAction
  | IDeviceLoadDeviceSucessAction;

export type DevicesFilterActionTypes =
  | IDeviceFilterAddFilterAction
  | IDeviceFilterUpdateFilterAction
  | IDeviceFilterRemoveFilterAction
  | IDeviceFilterResetFilterAction;

export type AppiumDeviceLogsActionTypes =
  IAppiumDeviceLogSucessAction;

export type SeleniumDeviceConfigActionTypes =
  ISeleniumDeviceConfigSucessAction;
