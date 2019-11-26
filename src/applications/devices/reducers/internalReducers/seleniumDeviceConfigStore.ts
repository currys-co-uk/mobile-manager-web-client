import * as Immutable from 'immutable';
import { SeleniumDeviceConfigActionTypes } from "../../actions/types/actionTypes";
import { SeleniumConfigActionTypesEnum } from "../../constants/seleniumActionTypes";
import { ISeleniumConfig } from 'src/_shared/api/models/ISeleniumConfig';

const initialState = Immutable.Map<string, ISeleniumConfig>();
export const seleniumDeviceConfigStore = (state: Immutable.Map<string, ISeleniumConfig> = initialState, action: SeleniumDeviceConfigActionTypes): Immutable.Map<string, ISeleniumConfig> => {
  switch (action.type) {
    case SeleniumConfigActionTypesEnum.LoadSeleniumConfig:
      return state.set(action.payload.deviceId, action.payload.seleniumConfig);

    default: {
      return state;
    }
  }
};
