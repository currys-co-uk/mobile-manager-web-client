import * as React from 'react';
import { runtimeConfig } from "../../../runtimeConfig";

interface IDeviceDetailImageProps {
  deviceId: string;
}

export class DeviceDetailImage extends React.PureComponent<IDeviceDetailImageProps> {


  public render(): JSX.Element {

    return (
      <div className="device-detail__image-container">
        <img className="device-detail__image" src={runtimeConfig.mobileManagerApi + '/device/' + this.props.deviceId + '/screenshot'}/>
      </div>
    )
  }
}
