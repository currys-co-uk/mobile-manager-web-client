import { IDeviceFilterAddFilterAction, IDeviceFilterRemoveFilterAction, IDeviceFilterResetFilterAction, IDeviceFilterUpdateFilterAction } from "./devicesFilterActions";
import { DevicesFilterActionTypesEnum } from "../constants/devicesFilterActionTypes";
import { DeviceFilterType, IDeviceFilterOperation } from "../reducers/internalReducers/devicesFilterStore";

export const addDeviceFilterAction = (filterType: DeviceFilterType, filter: IDeviceFilterOperation): IDeviceFilterAddFilterAction => ({
  type: DevicesFilterActionTypesEnum.AddFilter,
  payload: {
    filter,
    filterType
  },
});

export const removeDeviceFilterAction = (filterType: DeviceFilterType): IDeviceFilterRemoveFilterAction => ({
  type: DevicesFilterActionTypesEnum.RemoveFilter,
  payload: {
    filterType
  },
});

export const updateDeviceFilterAction = (filterType: DeviceFilterType, filter: IDeviceFilterOperation): IDeviceFilterUpdateFilterAction => ({
  type: DevicesFilterActionTypesEnum.UpdateFilter,
  payload: {
    filter,
    filterType
  },
});

export const resetDeviceFilterAction = (): IDeviceFilterResetFilterAction => ({
  type: DevicesFilterActionTypesEnum.ResetFilter,
});
