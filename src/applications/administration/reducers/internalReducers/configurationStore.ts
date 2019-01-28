import { ConfigurationActionTypeEnum } from "../../constants/configurationActionTypeEnum";
import { ConfigurationActionType } from "../../actions/types/actionTypes";
import { IManagerConfiguration } from "../../../../_shared/api/models/IManagerConfiguration";

const initialState: IManagerConfiguration = {
  xcodePath: '',
  reservationServiceRefreshTime: undefined,
  projectVersion: '',
  listeningPort: undefined,
  iosServiceEnabled: undefined,
  iosDeviceServiceRefreshTime: undefined,
  ideviceSyslogFolderPath: '',
  globalReconnectTimeout: undefined,
  appiumPortRangeMin: undefined,
  appiumPortRangeMax: undefined,
  appiumLogFilePath: '',
  androidServiceEnabled: undefined,
  androidDeviceServiceRefreshTime: undefined,
  localIpAddress: '',
  listeningIpAddress: ''
};


export const configurationStore = (state: IManagerConfiguration = initialState, action: ConfigurationActionType): IManagerConfiguration => {
  switch (action.type) {
    case ConfigurationActionTypeEnum.LoadConfigurationSuccess:
      return action.payload;

    default: {
      return state;
    }
  }
};
