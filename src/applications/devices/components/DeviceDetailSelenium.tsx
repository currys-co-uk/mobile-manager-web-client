import * as React from 'react';

interface IDeviceDetailSeleniumProps {
  seleniumConfig: string;
}

export class DeviceDetailSelenium extends React.PureComponent<IDeviceDetailSeleniumProps> {

  public render(): JSX.Element {

    return (
      <div className="tile-container">
        <div className="tile">
          <div className="tile__header">
            Selenium Config
          </div>
          <div className="tile__body">
            <div
              className="device-detail__selenium-config"
            >
              {this.props.seleniumConfig}
            </div>
            <div className="device-detail__selenium-buttons">
              <button disabled={true}>Copy To Clipboard</button>
              <button disabled={true}>Download</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
