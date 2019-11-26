import * as React from 'react';
import { ISeleniumConfig } from 'src/_shared/api/models/ISeleniumConfig';
import * as copy from 'copy-to-clipboard';

interface IDeviceDetailSeleniumProps {
  seleniumConfig: ISeleniumConfig;
}

interface IDeviceDetailSeleniumState {
  shownSeleniumConfig: string;
}

export class DeviceDetailSelenium extends React.PureComponent<IDeviceDetailSeleniumProps, IDeviceDetailSeleniumState> {

  constructor(props: IDeviceDetailSeleniumProps) {
    super(props);

    this.state = {
      shownSeleniumConfig: "xtest"
    };

    this.showConfig = this.showConfig.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  public render(): JSX.Element {
    let data = "Loading...";
    if (this.props.seleniumConfig !== undefined) {
      data = this.props.seleniumConfig[this.state.shownSeleniumConfig];
    }
    return (
      <div className="tile-container">
        <div className="tile">
          <div className="tile__header">
            Selenium Config
          </div>
          <div className="tile__body">
          <div>
            <button className="device-detail__selenium-button" data-config="xtest" onClick={e => this.showConfig(e)}>PHP-xTest</button>
            <button className="device-detail__selenium-button" data-config="codeceptjs" onClick={e => this.showConfig(e)}>CodeceptJS/JSQA</button>
          </div>
            <pre className="device-detail__selenium-config">
              {data}}
            </pre>
            <div className="device-detail__selenium-buttons">
              <button className="device-detail__selenium-button" onClick={e => this.copyToClipboard(e)}>Copy To Clipboard</button>
              <button className="device-detail__selenium-button" disabled={true}>Download</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  private showConfig(event: React.SyntheticEvent<HTMLButtonElement>): void {
    this.setState({
      shownSeleniumConfig: event.currentTarget.dataset.config || "xtest"
      }
    );
  }
  private copyToClipboard(event: React.SyntheticEvent<HTMLButtonElement>): void {
      copy(this.props.seleniumConfig[this.state.shownSeleniumConfig]);
  }
}
