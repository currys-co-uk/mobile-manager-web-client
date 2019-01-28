import { Dispatch, ThunkResult } from "../../../../!types/Dispatcher";
import { ConfigurationClient } from "../../../../_shared/api/client/ConfigurationClient";
import { receiveConfigurationSucess } from "../../actions/receiveConfiguration";
import { requestLoadingFinished, requestLoadingStarted } from "../../../../_shared/actionCreators/publicActionCreator";

export const loadConfigurationAction = (deps: ConfigurationClient) => (): ThunkResult<void> => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestLoadingStarted());
      const config = await deps.getConfiguration();
      dispatch(receiveConfigurationSucess(config));
    }
    catch {
      console.log('load configuration failed');
    }
    finally {
      dispatch(requestLoadingFinished());
    }
  };
};
