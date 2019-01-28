import * as React from 'react';
import { Dropdown } from "../../../_shared/components/Dropdown";
import { IDevice } from "../../../_shared/api/models/IDevice";
import { IDropdownOption } from "../../../_shared/components/DropdownOption";
import { DeviceType } from "../../../_shared/api/enums/DeviceType";
import { IRequestedDevice } from "../../../_shared/api/models/IRequestedDevice";

export interface IReserveDeviceFormDataProps {
  devices: IDevice[];
}

export interface IReserveDeviceFormCallbackProps {
  onCreateReservation: (requestedDevices: IRequestedDevice[]) => void;
  onCloseCallback: () => void;
}

interface IReserveDeviceFormProps extends IReserveDeviceFormCallbackProps, IReserveDeviceFormDataProps {
}

interface IReserveDeviceFormStateProps {
  selectedDeviceId?: IDropdownOption;
  selectedDeviceName?: IDropdownOption;
  selectedDeviceType?: DeviceType;
  selectedDeviceProperties: IReserveDeviceProperties[];
  selectedDevicePropertyKey: string;
  selectedDevicePropertyValue: string;
  requestedDevices: IRequestedDevice[];
  showAdvanced: boolean;
}

interface IReserveDeviceProperties {
  key: string;
  value: string;
}

export class MultiReserveDeviceForm extends React.PureComponent<IReserveDeviceFormProps, IReserveDeviceFormStateProps> {

  constructor(props: IReserveDeviceFormProps) {
    super(props);

    this.state = {
      selectedDeviceId: undefined,
      selectedDeviceName: undefined,
      selectedDeviceType: undefined,
      selectedDeviceProperties: [],
      selectedDevicePropertyKey: '',
      selectedDevicePropertyValue: '',
      requestedDevices: [],
      showAdvanced: false
    };

    this.selectDeviceId = this.selectDeviceId.bind(this);
    this.selectDeviceName = this.selectDeviceName.bind(this);
    this.addDevice = this.addDevice.bind(this);
    this.removeDevice = this.removeDevice.bind(this);
    this.createReservation = this.createReservation.bind(this);
    this.canAddDevice = this.canAddDevice.bind(this);
  }

  public render(): JSX.Element {

    const deviceIds: IDropdownOption[] = this.props.devices.map((device: IDevice) => {
      return {label: device.id, value: device.id}
    });

    const deviceNames: IDropdownOption[] = this.props.devices.map((device: IDevice) => {
      return {label: device.name, value: device.name}
    });

    return <div className="reserve-device">
      <div className="reserve-device__simple">
        <div className="reserve-device__row">
          <label className="reserve-device__row-key">Device ID</label>
          <div className="reserve-device__row-value">
            <Dropdown
              options={deviceIds}
              selectedOption={this.state.selectedDeviceId}
              onChangeFilterCallback={this.selectDeviceId}
              onClearFilterCallback={() => this.setState({selectedDeviceId: undefined})}
            />
          </div>
        </div>
        <div className="reserve-device__row">
          <label className="reserve-device__row-key">Device Names</label>
          <div className="reserve-device__row-value">
            <Dropdown
              options={deviceNames}
              disabled={this.state.selectedDeviceId ? true : false}
              selectedOption={this.state.selectedDeviceName}
              onChangeFilterCallback={this.selectDeviceName}
              onClearFilterCallback={() => this.setState({selectedDeviceName: undefined})}
            />
          </div>
        </div>
      </div>
      <div className="reserve-device__row reserve-device__row--centered">
        <button
          onClick={() => this.setState((prevState) => ({
            showAdvanced: !prevState.showAdvanced
          }))}
          disabled={this.state.selectedDeviceId ? true : false}
        >
          Show advanced
        </button>
      </div>
      {
        this.state.showAdvanced &&
        <div className="reserve-device__advanced">
            <div className="reserve-device__row">
                <div className="reserve-device__row-key">
                    <label>Device Type</label>
                </div>
                <div className="reserve-device__row-value">
                    <div
                        className="reserve-device__device-type"
                    >
                        <input
                            type="checkbox"
                            checked={this.state.selectedDeviceType === DeviceType.iOS}
                            onChange={() => this.deviceTypeSelectionChange(DeviceType.iOS)}
                            disabled={this.state.selectedDeviceId ? true : false}
                        />
                        <label
                            onChange={() => this.deviceTypeSelectionChange(DeviceType.iOS)}
                        >
                            iOS
                        </label>
                    </div>
                    <div
                        className="reserve-device__device-type"
                    >
                        <input
                            type="checkbox"
                            checked={this.state.selectedDeviceType === DeviceType.Android}
                            onChange={() => this.deviceTypeSelectionChange(DeviceType.Android)}
                            disabled={this.state.selectedDeviceId ? true : false}
                        />
                        <label
                            onChange={() => this.deviceTypeSelectionChange(DeviceType.Android)}
                        >
                            Android
                        </label>
                    </div>
                </div>
            </div>
            <div className="reserve-device__row">
                <label><strong>Device Properties</strong></label>
            </div>
            <div className="reserve-device__row">
                <label className="reserve-device__row-key">Key</label>
                <input
                    value={this.state.selectedDevicePropertyKey}
                    className="reserve-device__row-value"
                    type="text"
                    disabled={this.state.selectedDeviceId ? true : false}
                    onChange={e => this.setState({selectedDevicePropertyKey: e.target.value})}
                />
            </div>
            <div className="reserve-device__row">
                <label className="reserve-device__row-key">Value</label>
                <input
                    value={this.state.selectedDevicePropertyValue}
                    className="reserve-device__row-value"
                    type="text"
                    disabled={this.state.selectedDeviceId ? true : false}
                    onChange={e => this.setState({selectedDevicePropertyValue: e.target.value})}
                />
            </div>
        </div>
      }

      <div className="reserve-device__controls">
        <div className="reserve-device__row">
          <div className="reserve-device__row-key">
            <button
              onClick={this.addDevice}
              disabled={!this.canAddDevice()}
            >
              Add device
            </button>
          </div>
          <div className="reserve-device__row-value">
            <button
              onClick={() => this.createReservation()}
              disabled={this.state.requestedDevices.length < 1}
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
      <div className="reserve-device__requested">
        <div className="reserve-device__row">
          <div className="reserve-device__column">
            <strong>Selector</strong>
          </div>
          <div className="reserve-device__column">
            <strong>Value</strong>
          </div>
        </div>
        {
          this.state.requestedDevices && this.state.requestedDevices.map((device, index) => {
            return (
              <div className="reserve-device__row" key={index}>
                <div className="reserve-device__column">
                  {Object.keys(device).map(key => {
                    if (device[key] !== undefined) {
                      if (typeof (device[key]) === "object") {
                        console.log('state', this.state.requestedDevices);
                        return device.properties ? device.properties[0].key : '';
                      }
                      return key + '\n'
                    }
                    return '';
                  })}
                </div>
                <div className="reserve-device__column">
                  {Object.keys(device).map(key => {
                    if (device[key] !== undefined) {
                      if (typeof (device[key]) === "object") {
                        return device.properties ? device.properties[0].value : '';
                      }
                      return device[key] + '\n';
                    }
                    return '';
                  })}
                </div>
                <div className="reserve-device__delete-key" onClick={() => this.removeDevice(device)}>
                  <i className="glyphicon glyphicon-remove"/>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>;
  }

  private deviceTypeSelectionChange(deviceType: DeviceType) {
    if (this.state.selectedDeviceType === undefined) {
      this.setState({
        selectedDeviceType: deviceType
      });
    } else {
      if (this.state.selectedDeviceType === deviceType) {
        this.setState({
          selectedDeviceType: undefined
        });
      }

      if (this.state.selectedDeviceType !== deviceType) {
        this.setState({
          selectedDeviceType: deviceType
        });
      }
    }
  }

  private selectDeviceId(option: IDropdownOption) {
    this.setState((prevState) => {
      return {
        showAdvanced: prevState.showAdvanced,
        requestedDevices: prevState.requestedDevices,
        selectedDeviceType: undefined,
        selectedDeviceProperties: [],
        selectedDeviceName: undefined,
        selectedDevicePropertyKey: '',
        selectedDevicePropertyValue: '',
        selectedDeviceId: option
      }
    });
  }

  private selectDeviceName(option: IDropdownOption) {
    this.setState({
      selectedDeviceName: option
    });
  }

  private addDevice() {
    const hasPropertyValid = this.state.selectedDevicePropertyKey && this.state.selectedDevicePropertyValue;
    const addedDevice: IRequestedDevice = {
      deviceType: this.state.selectedDeviceType,
      deviceId: this.state.selectedDeviceId ? this.state.selectedDeviceId.value : undefined,
      deviceName: this.state.selectedDeviceName ? this.state.selectedDeviceName.value : undefined,
      properties: hasPropertyValid ? [{key: this.state.selectedDevicePropertyKey, value: this.state.selectedDevicePropertyValue}] : undefined
    };
    this.setState((prevState) => {
      return {
        selectedDeviceType: undefined,
        selectedDeviceProperties: [],
        selectedDeviceName: undefined,
        selectedDeviceId: undefined,
        selectedDevicePropertyKey: '',
        selectedDevicePropertyValue: '',
        requestedDevices: [...prevState.requestedDevices, addedDevice]
      }
    });
  }

  private canAddDevice(): boolean {
    return (
      this.state.selectedDeviceType !== undefined ||
      this.state.selectedDeviceId !== undefined ||
      this.state.selectedDeviceName !== undefined ||
      this.state.selectedDevicePropertyKey !== '' && this.state.selectedDevicePropertyValue !== '');
  }

  private createReservation(): void {
    this.props.onCreateReservation(this.state.requestedDevices);
    this.props.onCloseCallback();
  }

  private removeDevice(deviceToRemove: IRequestedDevice) {
    this.setState((prevState) => {
      return {
        requestedDevices: prevState.requestedDevices.filter(item => item !== deviceToRemove)
      }
    });
  }
}

