import * as React from 'react';
import { IManagerConfiguration } from "../../../_shared/api/models/IManagerConfiguration";
import { Panel } from "../../../_shared/components/Panel";

export interface IConfigurationDataProps {
  configuration: IManagerConfiguration;
}

export interface IConfigurationCallbackProps {
  loadConfig(): void;
}

interface IConfigurationProps extends IConfigurationDataProps, IConfigurationCallbackProps {
}

export class Configuration extends React.PureComponent<IConfigurationProps> {

  constructor(props: IConfigurationProps) {
    super(props);
  }

  public componentWillMount() {
    this.props.loadConfig();
  }

  public render(): JSX.Element {
    const {
      androidDeviceServiceRefreshTime,
      androidServiceEnabled,
      appiumLogFilePath,
      appiumPortRangeMax,
      appiumPortRangeMin,
      globalReconnectTimeout,
      ideviceSyslogFolderPath,
      iosDeviceServiceRefreshTime,
      iosServiceEnabled,
      listeningIpAddress,
      listeningPort,
      localIpAddress,
      projectVersion,
      reservationServiceRefreshTime,
      xcodePath
    } = this.props.configuration;
    return (
      <Panel
          caption={'Configuration'}
      >
          <div className="configuration__row">
            <div className="configuration__label">localIpAddress</div>
            <div className="configuration__value">
              <div className="configuration__input" >{localIpAddress}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">listeningIpAddress</div>
            <div className="configuration__value">
              <div className="configuration__input" >{listeningIpAddress}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">listeningPort</div>
            <div className="configuration__value">
              <div className="configuration__input" >{listeningPort}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">iosDeviceServiceRefreshTime</div>
            <div className="configuration__value">
              <div className="configuration__input" >{iosDeviceServiceRefreshTime}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">reservationServiceRefreshTime</div>
            <div className="configuration__value">
              <div className="configuration__input" >{reservationServiceRefreshTime}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">androidDeviceServiceRefreshTime</div>
            <div className="configuration__value">
              <div className="configuration__input" >{androidDeviceServiceRefreshTime}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">globalReconnectTimeout</div>
            <div className="configuration__value">
              <div className="configuration__input">{globalReconnectTimeout}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">appiumPortRangeMin</div>
            <div className="configuration__value">
              <div className="configuration__input" >{appiumPortRangeMin}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">appiumPortRangeMax</div>
            <div className="configuration__value">
              <div className="configuration__input" >{appiumPortRangeMax}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">appiumLogFilePath</div>
            <div className="configuration__value">
              <div className="configuration__input" >{appiumLogFilePath}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">ideviceSyslogFolderPath</div>
            <div className="configuration__value">
              <div className="configuration__input" >{ideviceSyslogFolderPath}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">projectVersion</div>
            <div className="configuration__value">
              <div className="configuration__input">{projectVersion}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">xcodePath</div>
            <div className="configuration__value">
              <div className="configuration__input">{xcodePath}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">androidServiceEnabled</div>
            <div className="configuration__value">
              <div className="configuration__input">{androidServiceEnabled ? String(androidServiceEnabled) : ''}</div>
            </div>
          </div>

          <div className="configuration__row">
            <div className="configuration__label">iosServiceEnabled</div>
            <div className="configuration__value">
              <div className="configuration__input">{iosServiceEnabled ? String(iosServiceEnabled) : ''}</div>
            </div>
          </div>
      </Panel>
    );
  }
}
