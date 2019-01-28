import * as React from "react";
import { AdministrationRoute, DashboardRoute, ReservationsRoute } from "../_shared/constants/routePaths";
import { MenuItem } from "./MenuItem";
import { runtimeConfig } from "../runtimeConfig";

export class Menubar extends React.PureComponent {

  public render(): JSX.Element {
    return (
      <div className="app__menu">
        <div className="menubar">
          <div className="menu">
            <div className="menu__header">
              Menu
            </div>
            <MenuItem
              title={'Dashboard'}
              icon={'glyphicon-home'}
              routeLink={DashboardRoute}
            />
            <MenuItem
              title={'Reservation'}
              icon={'glyphicon-tower'}
              routeLink={ReservationsRoute}
            />
            <MenuItem
              title={'Administration'}
              icon={'glyphicon-tower'}
              routeLink={AdministrationRoute}
            />
            <MenuItem
              title={'Documentation'}
              icon={'glyphicon-book'}
              routeLink={`${runtimeConfig.mobileManagerServerUrl}/doc`}
            />
          </div>
        </div>
      </div>
    );
  }
}
