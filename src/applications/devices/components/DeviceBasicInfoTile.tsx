import * as React from 'react';
import { IDevice } from "../../../_shared/api/models/IDevice";

export interface IDeviceInfoTileDataProps {
  device: IDevice;
}

export class DeviceBasicInfoTile extends React.PureComponent<IDeviceInfoTileDataProps> {
  public render(): JSX.Element {

    return (
      <div className="tile-container">
        <div className="tile">
          <div className="tile__header">
            Basic Info
          </div>
          <div className="tile__body">
            <div className="tile__row">
              <div className="tile__item-name">Id</div>
              <div className="tile__item-value">
                {this.props.device.id}
              </div>
            </div>
            <div className="tile__row">
              <div className="tile__item-name">Name</div>
              <div className="tile__item-value">
                {this.props.device.name}
              </div>
            </div>
            <div className="tile__row">
              <div className="tile__item-name">Type</div>
              <div className="tile__item-value">
                {this.props.device.type}
              </div>
            </div>
            <div className="tile__row">
              <div className="tile__item-name">Status</div>
              <div className="tile__item-value">
                {this.props.device.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
