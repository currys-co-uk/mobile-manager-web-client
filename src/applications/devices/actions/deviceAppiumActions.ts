import { Action } from "redux";
import { AppiumLogActionTypesEnum } from "../constants/appiumActionTypes";


export interface IAppiumDeviceLogSucessAction extends Action {
  type: AppiumLogActionTypesEnum.LoadAppiumLog
  payload: {
    deviceId: string,
    appiumLog: string;
  }
}
