import { IConfigurationLoadConfigurationAction, IConfigurationLoadConfigurationSuccessAction } from "../configurationActions";

export type ConfigurationActionType =
  | IConfigurationLoadConfigurationAction
  | IConfigurationLoadConfigurationSuccessAction;
