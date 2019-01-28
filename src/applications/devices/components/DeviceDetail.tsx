import * as React from 'react';
import {IDevice} from "../../../_shared/api/models/IDevice";
import {IReservationApplied} from "../../../_shared/api/models/IReservationApplied";
import {Breadcrumb} from "../../../_shared/components/Breadcrumb";
import {Switch, Route, RouteComponentProps} from 'react-router';
import {DeviceDetailProperties} from "./DeviceDetailProperties";
import {DeviceDetailAppiumLog} from "./DeviceDetailAppiumLog";
import {DeviceDetailBasicInfo} from "./DeviceDetailBasicInfo";
import {IPanelTab, PanelWithTabs} from "../../../_shared/components/PanelWithTabs";
import {IDeviceRouteParams} from "../containers/DeviceDetail";

export interface IDeviceDetailDataProps {
  device: IDevice;
  reservationApplied?: IReservationApplied;
  appiumLog: string;
  seleniumConfig: string;
}

export interface IDeviceDetailCallbackProps {
  reloadDevice(device: IDevice): void;
  loadAppiumLog(deviceId: string): void;
  loadSeleniumConfig(deviceId: string): void;
}

interface IDeviceDetailProps extends IDeviceDetailDataProps, IDeviceDetailCallbackProps, RouteComponentProps<IDeviceRouteParams> {
}

export class DeviceDetail extends React.PureComponent<IDeviceDetailProps> {

  constructor(props: IDeviceDetailProps) {
    super(props);
  }

  public componentDidMount(): void {
    this.props.loadAppiumLog(this.props.device.id);
    this.props.loadSeleniumConfig(this.props.device.id);
  }

  public render(): JSX.Element | null {

    if (!this.props.device) {
      return null;
    }

   const tabs: IPanelTab[] = [
      {
        tabUrl: 'basic',
        tabName: 'Basic Info',
      },
      {
        tabName: 'Properties',
        tabUrl: 'properties'
      },
      {
        tabName: 'Logs',
        tabUrl: 'logs'
      }
    ];

    return (
      <>
        <Breadcrumb
          title='Device'
          description={this.props.device.id}
        />
        <div className="device-detail">
          <PanelWithTabs
            caption={'Device detail'}
            currentTab={this.props.match.params.tab}
            currentUrl={'/Device/' + this.props.device.id}
            tabs={tabs}
          >
            <Switch>
              <Route exact={true} path={'/Device/:deviceId/basic'}>
                <DeviceDetailBasicInfo
                  device={this.props.device}
                  reservationApplied={this.props.reservationApplied}
                  seleniumConfig={this.props.seleniumConfig}
                />
              </Route>
              <Route path={'/Device/:deviceId/properties'}>
                <DeviceDetailProperties
                  device={this.props.device}
                />
              </Route>
              <Route path={'/Device/:deviceId/logs'}>
                <DeviceDetailAppiumLog
                  appiumLog={this.props.appiumLog}
                />
              </Route>
            </Switch>
          </PanelWithTabs>
        </div>
      </>
    );
  }
}
