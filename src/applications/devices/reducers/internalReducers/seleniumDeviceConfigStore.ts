import * as Immutable from 'immutable';
import { SeleniumDeviceConfigActionTypes } from "../../actions/types/actionTypes";
import { SeleniumConfigActionTypesEnum } from "../../constants/seleniumActionTypes";

const initialState = Immutable.Map<string, string>();
export const seleniumDeviceConfigStore = (state: Immutable.Map<string, string> = initialState, action: SeleniumDeviceConfigActionTypes): Immutable.Map<string, string> => {
  switch (action.type) {
    case SeleniumConfigActionTypesEnum.LoadSeleniumConfig:
      return state.set(action.payload.deviceId, action.payload.seleniumConfig);

    default: {
      return state;
    }
  }
};
