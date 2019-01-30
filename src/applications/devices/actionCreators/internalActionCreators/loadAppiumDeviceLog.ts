import { Dispatch } from "redux";
import { ThunkResult } from "../../../../!types/Dispatcher";
import { AppiumLogClient } from "../../../../_shared/api/client/AppiumLogClient";
import { loadAppiumLogSuccess } from "../../actions/loadAppiumDeviceLog";
import { requestLoadingFinished, requestLoadingStarted } from "../../../../_shared/actionCreators/publicActionCreator";

export const loadAppiumDeviceLogAction = (deps: AppiumLogClient, deviceId: string) => (): ThunkResult<void> => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestLoadingStarted());
      const response = await deps.getDeviceAppiumLog(deviceId);
      dispatch(loadAppiumLogSuccess(deviceId, response));
    }
    catch {
      console.log('Error during getting appium log');
    }
    finally {
      dispatch(requestLoadingFinished());
    }
  };
};

