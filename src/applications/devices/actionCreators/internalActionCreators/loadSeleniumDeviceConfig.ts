import { Dispatch } from "redux";
import { ThunkResult } from "../../../../!types/Dispatcher";
import { SeleniumDeviceConfigClient } from "../../../../_shared/api/client/SeleniumDeviceConfigClient";
import { loadSeleniumConfigSuccess } from "../../actions/loadSeleniumDeviceConfig";
import { requestLoadingFinished, requestLoadingStarted } from "../../../../_shared/actionCreators/publicActionCreator";

export const loadSeleniumDeviceConfigAction = (deps: SeleniumDeviceConfigClient, deviceId: string) => (): ThunkResult<void> => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestLoadingStarted());
      const response = await deps.getSeleniumConfig(deviceId);
      dispatch(loadSeleniumConfigSuccess(deviceId, response));
    }
    catch {
      console.log('Error during getting appium log');
    }
    finally {
      dispatch(requestLoadingFinished());
    }
  };
};

