import { Action } from "redux";
import { SeleniumConfigActionTypesEnum } from "../constants/seleniumActionTypes";
import { ISeleniumConfig } from 'src/_shared/api/models/ISeleniumConfig';


export interface ISeleniumDeviceConfigSucessAction extends Action {
  type: SeleniumConfigActionTypesEnum.LoadSeleniumConfig
  payload: {
    deviceId: string,
    seleniumConfig: ISeleniumConfig;
  }
}
