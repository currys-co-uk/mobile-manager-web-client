import * as React from 'react';
import {DeviceDetailImage} from "./DeviceDetailImage";
import {DeviceBasicInfoTile} from "./DeviceBasicInfoTile";
import {DeviceReservationsTile} from "./DeviceReservationsTile";
import {DeviceDetailSelenium} from "./DeviceDetailSelenium";
import { DeviceDetailActionButtons } from "./DeviceDetailActionButtons";
import { IDevice } from "../../../_shared/api/models/IDevice";
import { IReservationApplied } from "../../../_shared/api/models/IReservationApplied";
import { ISeleniumConfig } from 'src/_shared/api/models/ISeleniumConfig';

interface IDeviceDetailBasicInfoProps {
  device: IDevice
  reservationApplied?: IReservationApplied
  seleniumConfig: ISeleniumConfig
}


export class DeviceDetailBasicInfo extends React.PureComponent<IDeviceDetailBasicInfoProps> {
  public render(): JSX.Element {

    return (
      <div className="device-detail__container">
        <DeviceDetailImage
          deviceId={this.props.device.id}
        />
        <div className="device-detail__info">
          <div className="device-detail__row">
            <DeviceBasicInfoTile
              device={this.props.device}
            />
            <DeviceReservationsTile
              reservation={this.props.reservationApplied}
            />
          </div>
          <div className="device-detail__row">
            <DeviceDetailSelenium
              seleniumConfig={this.props.seleniumConfig}
            />
            <DeviceDetailActionButtons/>
          </div>
        </div>

      </div>
    );
  }
}



