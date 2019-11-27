import * as React from 'react';
import { ISeleniumConfig } from 'src/_shared/api/models/ISeleniumConfig';
import * as copy from 'copy-to-clipboard';

interface IDeviceDetailSeleniumProps {
  seleniumConfig: ISeleniumConfig;
}

interface IDeviceDetailSeleniumState {
  selectedSeleniumConfig: string;
}

export class DeviceDetailSelenium extends React.PureComponent<IDeviceDetailSeleniumProps, IDeviceDetailSeleniumState> {

  constructor(props: IDeviceDetailSeleniumProps) {
    super(props);

    this.state = {
      selectedSeleniumConfig: "xtest"
    };

    this.toggleConfig = this.toggleConfig.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  public render(): JSX.Element {
    const data = this.props.seleniumConfig && this.props.seleniumConfig[this.state.selectedSeleniumConfig] || 'Loading...';
    return (
      <div className="tile-container">
        <div className="tile">
          <div className="tile__header">
            Selenium Config
          </div>
          <div className="tile__body">
          <div>
            <button className="device-detail__selenium-button" data-config="xtest" onClick={e => this.toggleConfig(e)}>PHP-xTest</button>
            <button className="device-detail__selenium-button" data-config="codeceptjs" onClick={e => this.toggleConfig(e)}>CodeceptJS/JSQA</button>
          </div>
            <pre className="device-detail__selenium-config">
              {data}
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
  private toggleConfig(event: React.SyntheticEvent<HTMLButtonElement>): void {
    this.setState({
      selectedSeleniumConfig: event.currentTarget.dataset.config || "xtest"
      }
    );
  }
  private copyToClipboard(event: React.SyntheticEvent<HTMLButtonElement>): void {
      copy(this.props.seleniumConfig[this.state.selectedSeleniumConfig]);
  }
}
