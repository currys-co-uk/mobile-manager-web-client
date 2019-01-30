import { Action } from "redux";
import { SeleniumConfigActionTypesEnum } from "../constants/seleniumActionTypes";


export interface ISeleniumDeviceConfigSucessAction extends Action {
  type: SeleniumConfigActionTypesEnum.LoadSeleniumConfig
  payload: {
    deviceId: string,
    seleniumConfig: string;
  }
}
