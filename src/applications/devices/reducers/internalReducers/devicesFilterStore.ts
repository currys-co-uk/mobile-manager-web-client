import * as Immutable from 'immutable';
import { DevicesFilterActionTypes } from "../../actions/types/actionTypes";
import { DevicesFilterActionTypesEnum } from "../../constants/devicesFilterActionTypes";

export type DeviceFilterType = 'DeviceType' | 'DeviceStatus' | 'DeviceName';
export interface IDeviceFilterOperation {
  property: string;
  value: string;
}

const initialState = Immutable.Map<DeviceFilterType, IDeviceFilterOperation>();
export const devicesFilterStore = (state: Immutable.Map<DeviceFilterType, IDeviceFilterOperation> = initialState, action: DevicesFilterActionTypes): Immutable.Map<DeviceFilterType, IDeviceFilterOperation> => {
  switch (action.type) {
    case DevicesFilterActionTypesEnum.AddFilter:
      return state.set(action.payload.filterType, action.payload.filter);
    case DevicesFilterActionTypesEnum.UpdateFilter:
      return state.set(action.payload.filterType, action.payload.filter);
    case DevicesFilterActionTypesEnum.RemoveFilter:
      return state.delete(action.payload.filterType);
    case DevicesFilterActionTypesEnum.ResetFilter:
      return initialState;

    default: {
      return state;
    }
  }
};
