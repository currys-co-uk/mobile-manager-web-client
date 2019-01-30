import * as React from 'react';
import { DeviceFilterType, IDeviceFilterOperation } from "../reducers/internalReducers/devicesFilterStore";
import {DeviceStatusDropdown} from "./Filters/DeviceStatusDropdown";
import {DeviceTypeDropdown} from "./Filters/DeviceTypeDropdown";
import {DeviceNameFilter} from "./Filters/SelectedNameFilter";

export interface IDeviceFilterCallbackProps {
  addFilter: (filterType: DeviceFilterType, predicate: IDeviceFilterOperation) => void;
  updateFilter: (filterType: DeviceFilterType, predicate: IDeviceFilterOperation) => void;
  removeFilter: (filterType: DeviceFilterType) => void;
  resetFilter: () => void;
}

export interface IDeviceFilterDataProps {
  selectedStatusFilter?: IDeviceFilterOperation;
  selectedTypeFilter?: IDeviceFilterOperation;
  selectedNameFilter: string;
}

interface IDeviceFilterProps extends IDeviceFilterDataProps, IDeviceFilterCallbackProps {
}

export class DeviceFilters extends React.PureComponent<IDeviceFilterProps> {
  public render(): JSX.Element {
    return (
      <div className="device-filters">
        <div className="device-filters__input">
          <DeviceNameFilter
            addFilter={this.props.addFilter}
            removeFilter={this.props.removeFilter}
            updateFilter={this.props.updateFilter}
            selectedNameFilter={this.props.selectedNameFilter}
          />
        </div>
        <div className="device-filters__select">
          <DeviceTypeDropdown
            addFilter={this.props.addFilter}
            removeFilter={this.props.removeFilter}
            updateFilter={this.props.updateFilter}
            selectedTypeFilter={this.props.selectedTypeFilter}
          />
        </div>
        <div className="device-filters__select">
          <DeviceStatusDropdown
            addFilter={this.props.addFilter}
            removeFilter={this.props.removeFilter}
            updateFilter={this.props.updateFilter}
            selectedStatusFilter={this.props.selectedStatusFilter}
          />
        </div>
        <div className="device-filters__button">
          <button className="device-filters__button"  onClick={this.props.resetFilter}>Clear filters</button>
        </div>
      </div>
    );
  }
}
