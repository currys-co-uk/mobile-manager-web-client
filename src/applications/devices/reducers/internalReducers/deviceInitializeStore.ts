import { DevicesActionTypesEnum } from "../../constants/devicesActionTypes";
import { DevicesActionTypes } from "../../actions/types/actionTypes";

const initialState = false;
export const deviceInitializedStore = (state: boolean = initialState, action: DevicesActionTypes): boolean => {
  switch (action.type) {
    case DevicesActionTypesEnum.LoadDevicesSuccess:
      return true;

    default: {
      return state;
    }
  }
};
