import * as React from 'react';
import { IReservationApplied } from "../../../_shared/api/models/IReservationApplied";

export interface IDeviceInfoTileDataProps {
  reservation?: IReservationApplied;
}


export class DeviceReservationsTile extends React.PureComponent<IDeviceInfoTileDataProps> {
  public render(): JSX.Element {

    const {reservation} = this.props;

    return (
      <div className="tile-container">
        <div className="tile">
          <div className="tile__header">
            Reservations
          </div>
          <div className="tile__body">
            <div className="tile__row">
              <div className="tile__item-name">Status</div>
              <div className="tile__item-value">
                {reservation && reservation.available ? 'Reserve' : 'No active reservation'}
              </div>
            </div>
            <div className="tile__row">
              <div className="tile__item-name">Reserved From:</div>
              <div className="tile__item-value">
                {reservation && reservation.dateCreated ? reservation.dateCreated : ''}
              </div>
            </div>
            <div className="tile__row">
              <div className="tile__item-name">Locked by:</div>
              <div className="tile__item-value">
                {''}
              </div>
            </div>
            <div className="tile__row">
              <div className="tile__item-name">No. queued:</div>
              <div className="tile__item-value">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
