import * as React from 'react';

interface IDeviceDetailAppiumLog {
  appiumLog: string;
}

export class DeviceDetailAppiumLog extends React.PureComponent<IDeviceDetailAppiumLog> {
  public render(): JSX.Element {
    return (
      <div className="device-detail__appium-log">
        {this.props.appiumLog}
      </div>
    );
  }
}



