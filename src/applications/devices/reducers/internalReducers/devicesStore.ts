import * as Immutable from 'immutable';
import { IDevice } from "../../../../_shared/api/models/IDevice";
import { DevicesActionTypesEnum } from "../../constants/devicesActionTypes";
import { DevicesActionTypes } from "../../actions/types/actionTypes";

const initialState = Immutable.List<IDevice>([]);
export const devicesStore = (state: Immutable.List<IDevice> = initialState, action: DevicesActionTypes): Immutable.List<IDevice> => {
  switch (action.type) {
    case DevicesActionTypesEnum.LoadDevicesSuccess:
      return action.payload.devices;
    case DevicesActionTypesEnum.LoadDevicesFail:
      return initialState;
    case DevicesActionTypesEnum.LoadDeviceSuccess:
      return state.update(
        state.findIndex((item: IDevice) => item.id === action.payload.device.id), item => action.payload.device
      );

    default: {
      return state;
    }
  }
};
