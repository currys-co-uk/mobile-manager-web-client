import { Action } from "redux";
import { DevicesFilterActionTypesEnum } from "../constants/devicesFilterActionTypes";
import { DeviceFilterType, IDeviceFilterOperation } from "../reducers/internalReducers/devicesFilterStore";


export interface IDeviceFilterAddFilterAction extends Action {
  type: DevicesFilterActionTypesEnum.AddFilter
  payload: {
    filter: IDeviceFilterOperation,
    filterType: DeviceFilterType
  }
}

export interface IDeviceFilterUpdateFilterAction extends Action {
  type: DevicesFilterActionTypesEnum.UpdateFilter
  payload: {
    filter: IDeviceFilterOperation,
    filterType: DeviceFilterType
  }
}

export interface IDeviceFilterRemoveFilterAction extends Action {
  type: DevicesFilterActionTypesEnum.RemoveFilter
  payload: {
    filterType: DeviceFilterType
  }
}

export interface IDeviceFilterResetFilterAction extends Action {
  type: DevicesFilterActionTypesEnum.ResetFilter
}
