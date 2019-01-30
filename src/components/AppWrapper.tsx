import * as PropTypes from "prop-types";
import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from "react-router";
import { Administration } from "../applications/administration/components/Administration";
import { Dashboard } from "../applications/dashboard/components/Dashboard";
import { Reservation } from "../applications/reservation/components/Reservation";
import { AdministrationRoute, DashboardRoute, ReservationsRoute } from "../_shared/constants/routePaths";
import { DeviceDetail } from "../applications/devices/containers/DeviceDetail";
import { EnsureDevicesAndReservationsLoaded } from "../applications/devices/containers/EnsureDeviceLoaded";

export interface IAppWrapperProps extends RouteComponentProps<{}> {
}

export class AppWrapper extends React.PureComponent<IAppWrapperProps> {
  public static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {

    if (this.props.location.pathname === '/') {
      return (
        <Redirect to={DashboardRoute}/>
      )
    }

    return (
      <div className="app__content">
        <Switch>
          <Route
            path={'/Device/:deviceId/:tab'}
          >
            <EnsureDevicesAndReservationsLoaded>
              <DeviceDetail/>
            </EnsureDevicesAndReservationsLoaded>
          </Route>
          <Route
            path={DashboardRoute}
          >
            <Dashboard/>
          </Route>
          <Route
            path={ReservationsRoute}
          >
            <Reservation/>
          </Route>
          <Route
            path={AdministrationRoute}
          >
            <Administration/>
          </Route>
        </Switch>
        <div/>
      </div>
    );
  }
}
