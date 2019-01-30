import * as React from 'react';
import { Breadcrumb } from "../../../_shared/components/Breadcrumb";
import { DevicesDataGrid } from "../../devices/containers/DevicesDataGrid";

export class Dashboard extends React.PureComponent {

  public render(): JSX.Element {
    return (
      <>
        <Breadcrumb
          title={'Dashboard'}
        />
        <div className="dashboard">
          <div className="dashboard__content">
            <DevicesDataGrid />
          </div>
        </div>
      </>
    );
  }
}
