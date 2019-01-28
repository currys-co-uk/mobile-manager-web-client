import { AppiumLogActionTypesEnum } from "../constants/appiumActionTypes";
import { IAppiumDeviceLogSucessAction } from "./deviceAppiumActions";

export const loadAppiumLogSuccess = (deviceId: string, appiumLog: string): IAppiumDeviceLogSucessAction => ({
  type: AppiumLogActionTypesEnum.LoadAppiumLog,
  payload: {
    appiumLog,
    deviceId
  }
});
