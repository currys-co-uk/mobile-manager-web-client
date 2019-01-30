import * as React from 'react';
import { DeviceFilterType, IDeviceFilterOperation } from "../../reducers/internalReducers/devicesFilterStore";

export interface IDeviceNameFilterCallbackProps {
  addFilter: (filterType: DeviceFilterType, predicate: IDeviceFilterOperation) => void;
  removeFilter: (filterType: DeviceFilterType) => void;
  updateFilter: (filterType: DeviceFilterType, predicate: IDeviceFilterOperation) => void;
}

interface IDeviceNameFilterDataProps {
  selectedNameFilter?: string;
}

interface IDeviceNameFilterProps extends IDeviceNameFilterCallbackProps, IDeviceNameFilterDataProps {
}

export class DeviceNameFilter extends React.PureComponent<IDeviceNameFilterProps> {

  constructor(props: IDeviceNameFilterProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="device-name-filter">
        <input
          type="text"
          className="device-name-filter__input"
          placeholder={'Filter by name'}
          value={this.props.selectedNameFilter}
          onChange={e => this.onChangeNameHandler(e.target.value)}
        />
      </div>
    );
  }

  private onChangeNameHandler(name: string) {
    if (!this.props.selectedNameFilter && name) {
      this.props.addFilter('DeviceName', {property: 'name', value: name});
    } else if (this.props.selectedNameFilter && name) {
      this.props.updateFilter('DeviceName', {property: 'name', value: name});
    } else {
      this.props.removeFilter('DeviceName');
    }
  }
}
