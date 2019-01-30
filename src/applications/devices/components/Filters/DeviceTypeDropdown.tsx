import * as React from 'react';
import { AllDeviceTypes, DeviceTypeName } from "../../../../_shared/api/enums/DeviceType";
import { DeviceFilterType, IDeviceFilterOperation } from "../../reducers/internalReducers/devicesFilterStore";
import {Dropdown } from "../../../../_shared/components/Dropdown";
import { IDropdownOption } from "../../../../_shared/components/DropdownOption";

export interface IDeviceTypeFilterCallbackProps {
  addFilter: (filterType: DeviceFilterType, predicate: IDeviceFilterOperation) => void;
  updateFilter: (filterType: DeviceFilterType, predicate: IDeviceFilterOperation) => void;
  removeFilter: (filterType: DeviceFilterType) => void;
}

interface IDeviceTypeFilterDataProps {
  selectedTypeFilter?: IDeviceFilterOperation
}

interface IDeviceTypeFilterProps extends IDeviceTypeFilterDataProps, IDeviceTypeFilterCallbackProps {
}

export class DeviceTypeDropdown extends React.PureComponent<IDeviceTypeFilterProps> {

  constructor(props: IDeviceTypeFilterProps) {
    super(props);

    this.onChangeStatusFilterHandler = this.onChangeStatusFilterHandler.bind(this);
  }

  public render(): JSX.Element {
    const options: IDropdownOption[] = AllDeviceTypes.map(type => {
      return {
        value: type,
        label: DeviceTypeName.get(type)
      }
    });

    const selectedOption: IDropdownOption | undefined = options.find(item => !!this.props.selectedTypeFilter && item.value === this.props.selectedTypeFilter.value);

    return (
      <Dropdown
        options={options}
        onChangeFilterCallback={this.onChangeStatusFilterHandler}
        onClearFilterCallback={() => this.props.removeFilter('DeviceType')}
        selectedOption={selectedOption}
        placeholder={'Select device type...'}
      />
    );
  }

  private onChangeStatusFilterHandler(current: IDropdownOption) {
    if (this.props.selectedTypeFilter) {
      this.props.updateFilter('DeviceType', {property: 'type', value: current.value });
    }
    else {
      this.props.addFilter('DeviceType', {property: 'type', value: current.value });
    }
  }
}
