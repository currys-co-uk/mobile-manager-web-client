import { Dispatch } from "redux";
import { receiveDevicesFail } from "../../actions/receiveDevices";
import { ThunkResult } from "../../../../!types/Dispatcher";
import { receiveDeviceSucess } from "../../actions/receiveDevice";
import { DeviceClient } from "../../../../_shared/api/client/DeviceClient";
import { IDevice } from "../../../../_shared/api/models/IDevice";
import { requestLoadingFinished, requestLoadingStarted } from "../../../../_shared/actionCreators/publicActionCreator";

export const loadDeviceAction = (deps: DeviceClient, device: IDevice) => (): ThunkResult<void> => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestLoadingStarted());
      const loadedDevice = await deps.getDevice(device);
      dispatch(receiveDeviceSucess(loadedDevice));
    }
    catch {
      dispatch(receiveDevicesFail());
    }
    finally {
      dispatch(requestLoadingFinished());
    }
  };
};
