import * as React from 'react';
import { AllDeviceStatuses, DeviceStatusName } from "../../../../_shared/api/enums/DeviceStatus";
import { DeviceFilterType, IDeviceFilterOperation } from "../../reducers/internalReducers/devicesFilterStore";
import {Dropdown } from "../../../../_shared/components/Dropdown";
import { IDropdownOption } from "../../../../_shared/components/DropdownOption";

export interface IDeviceStatusFilterCallbackProps {
  addFilter: (filterType: DeviceFilterType, predicate: IDeviceFilterOperation) => void;
  updateFilter: (filterType: DeviceFilterType, predicate: IDeviceFilterOperation) => void;
  removeFilter: (filterType: DeviceFilterType) => void;
}

export interface IDeviceStatusFilterDataProps {
  selectedStatusFilter?: IDeviceFilterOperation;
}

interface IDeviceStatusFilterProps extends IDeviceStatusFilterDataProps, IDeviceStatusFilterCallbackProps {
}

export class DeviceStatusDropdown extends React.PureComponent<IDeviceStatusFilterProps> {

  constructor(props: IDeviceStatusFilterProps) {
    super(props);

    this.onChangeStatusFilterHandler = this.onChangeStatusFilterHandler.bind(this);
  }

  public render(): JSX.Element {
    const options: IDropdownOption[] = AllDeviceStatuses.map(status => {
      return {
        value: status,
        label: DeviceStatusName.get(status)
      }
    });

    const selectedOption: IDropdownOption | undefined = options.find(item => !!this.props.selectedStatusFilter && item.value === this.props.selectedStatusFilter.value);

    return (
      <Dropdown
        options={options}
        onChangeFilterCallback={this.onChangeStatusFilterHandler}
        onClearFilterCallback={() => this.props.removeFilter('DeviceStatus')}
        selectedOption={selectedOption}
        placeholder={'Select device status...'}
      />
    );
  }

  private onChangeStatusFilterHandler(current: IDropdownOption) {
    if (this.props.selectedStatusFilter) {
      this.props.updateFilter('DeviceStatus', {property: 'status', value: current.value });
    }
    else {
      this.props.addFilter('DeviceStatus', { property: 'status', value: current.value });
    }
  }
}
