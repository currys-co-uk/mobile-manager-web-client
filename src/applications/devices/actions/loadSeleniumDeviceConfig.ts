import { SeleniumConfigActionTypesEnum } from "../constants/seleniumActionTypes";
import { ISeleniumDeviceConfigSucessAction } from "./deviceSeleniumActions";
import { ISeleniumConfig } from '../../../_shared/api/models/ISeleniumConfig';

export const loadSeleniumConfigSuccess = (deviceId: string, seleniumConfig: ISeleniumConfig): ISeleniumDeviceConfigSucessAction => ({
  type: SeleniumConfigActionTypesEnum.LoadSeleniumConfig,
  payload: {
    seleniumConfig,
    deviceId
  }
});
