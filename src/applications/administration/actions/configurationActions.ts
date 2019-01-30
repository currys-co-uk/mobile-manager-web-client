import { Action } from "redux";
import { ConfigurationActionTypeEnum } from "../constants/configurationActionTypeEnum";
import { IManagerConfiguration } from "../../../_shared/api/models/IManagerConfiguration";

export interface IConfigurationLoadConfigurationAction extends Action {
  type: ConfigurationActionTypeEnum.LoadConfiguration;
}

export interface IConfigurationLoadConfigurationSuccessAction extends Action {
  type: ConfigurationActionTypeEnum.LoadConfigurationSuccess;
  payload: IManagerConfiguration
}
