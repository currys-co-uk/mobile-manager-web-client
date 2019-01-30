import * as Immutable from 'immutable';
import { AppiumDeviceLogsActionTypes } from "../../actions/types/actionTypes";
import { AppiumLogActionTypesEnum } from "../../constants/appiumActionTypes";

const initialState = Immutable.Map<string, string>();
export const appiumDeviceLogStore = (state: Immutable.Map<string, string> = initialState, action: AppiumDeviceLogsActionTypes): Immutable.Map<string, string> => {
  switch (action.type) {
    case AppiumLogActionTypesEnum.LoadAppiumLog:
      return state.set(action.payload.deviceId, action.payload.appiumLog);

    default: {
      return state;
    }
  }
};
