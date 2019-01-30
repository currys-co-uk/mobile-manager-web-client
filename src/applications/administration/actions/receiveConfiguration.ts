import { IManagerConfiguration } from "../../../_shared/api/models/IManagerConfiguration";
import { ConfigurationActionTypeEnum } from "../constants/configurationActionTypeEnum";
import { IConfigurationLoadConfigurationSuccessAction } from "./configurationActions";

export const receiveConfigurationSucess = (configuration: IManagerConfiguration): IConfigurationLoadConfigurationSuccessAction => ({
  type: ConfigurationActionTypeEnum.LoadConfigurationSuccess,
  payload: configuration,
});
