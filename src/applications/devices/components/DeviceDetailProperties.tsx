import * as React from 'react';
import { IDevice } from "../../../_shared/api/models/IDevice";

interface IDeviceDetailPropertiesProps {
  device: IDevice
}

export class DeviceDetailProperties extends React.PureComponent<IDeviceDetailPropertiesProps> {
  public render(): JSX.Element {

    return (
      <div>
        {this.props.device.properties.map(item => {
          return (<div key={item.key}>{item.key}: {item.value}</div>);
        } )}
      </div>
    );
  }
}



