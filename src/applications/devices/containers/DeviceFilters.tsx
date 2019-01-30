import * as React from "react";
import { Dispatch } from "../../../!types/Dispatcher";
import { DeviceFilters, IDeviceFilterCallbackProps, IDeviceFilterDataProps } from "../components/DeviceFilters";
import { connect } from "react-redux";
import { addDeviceFilter, removeDeviceFilter, resetDeviceFilter, updateDeviceFilter } from "../actionCreators/publicActionCreator";
import { DeviceFilterType, IDeviceFilterOperation } from "../reducers/internalReducers/devicesFilterStore";
import { IStore } from "../../../_shared/models/IStore";

function mapStateToProps(store: IStore): IDeviceFilterDataProps {
  const deviceTypeFilter = store.devicesStore.devicesFilters.has('DeviceType') ? store.devicesStore.devicesFilters.get('DeviceType') : undefined;
  const deviceStatusFilter = store.devicesStore.devicesFilters.has('DeviceStatus') ? store.devicesStore.devicesFilters.get('DeviceStatus') : undefined;
  const deviceNameFilter = store.devicesStore.devicesFilters.has('DeviceName') ? store.devicesStore.devicesFilters.get('DeviceName').value : '';
    return {
      selectedStatusFilter: deviceStatusFilter,
      selectedTypeFilter: deviceTypeFilter,
      selectedNameFilter: deviceNameFilter
    }
}

function mapDispatchToProps(dispatch: Dispatch): IDeviceFilterCallbackProps {
  return {
    addFilter: (filterType: DeviceFilterType, predicate: IDeviceFilterOperation) => dispatch(addDeviceFilter(filterType, predicate)),
    updateFilter: (filterType: DeviceFilterType, predicate: IDeviceFilterOperation) => dispatch(updateDeviceFilter(filterType, predicate)),
    removeFilter: (filterType: DeviceFilterType) => dispatch(removeDeviceFilter(filterType)),
    resetFilter: () => dispatch(resetDeviceFilter()),
  }
}

const DeviceFiltersContainer: React.ComponentClass = connect(mapStateToProps, mapDispatchToProps)(DeviceFilters);
export { DeviceFiltersContainer as DeviceFilters };
