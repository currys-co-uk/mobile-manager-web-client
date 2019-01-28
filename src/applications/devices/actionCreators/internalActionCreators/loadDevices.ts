import { Dispatch } from "redux";
import * as Immutable from 'immutable'
import { receiveDevicesFail, receiveDevicesSucess } from "../../actions/receiveDevices";
import { ThunkResult } from "../../../../!types/Dispatcher";
import { DeviceClient } from "../../../../_shared/api/client/DeviceClient";
import {IDevice} from "../../../../_shared/api/models/IDevice";

export const loadDevicesAction = (deps: DeviceClient) => (): ThunkResult<void> => {
  return async (dispatch: Dispatch) => {
    try {
      const devices = await deps.getDevices();
      dispatch(receiveDevicesSucess(Immutable.List<IDevice>(devices)));
    }
    catch {
      dispatch(receiveDevicesFail());
    }
  };
};

