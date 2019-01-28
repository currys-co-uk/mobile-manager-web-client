import * as React from 'react';


export class DeviceDetailActionButtons extends React.PureComponent {
  public render(): JSX.Element {

    return (
      <div className="tile-container">
        <div className="tile">
          <div className="tile__header">
            Controll device
          </div>
          <div className="tile__body">
            <div className="device-detail__action-buttons">
              <button disabled={true}>add reservation</button>
              <button disabled={true}>live screen</button>
              <button disabled={true}>execute cmd</button>
              <button disabled={true}>restart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



