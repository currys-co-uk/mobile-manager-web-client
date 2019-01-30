import { SeleniumConfigActionTypesEnum } from "../constants/seleniumActionTypes";
import { ISeleniumDeviceConfigSucessAction } from "./deviceSeleniumActions";

export const loadSeleniumConfigSuccess = (deviceId: string, seleniumConfig: string): ISeleniumDeviceConfigSucessAction => ({
  type: SeleniumConfigActionTypesEnum.LoadSeleniumConfig,
  payload: {
    seleniumConfig,
    deviceId
  }
});
