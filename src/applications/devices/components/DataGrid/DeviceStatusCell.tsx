import * as React from 'react';
import * as classNames from 'classnames';
import { DeviceStatus, DeviceStatusName } from "../../../../_shared/api/enums/DeviceStatus";

interface IDeviceStatusCellProps {
  status: DeviceStatus
}

export class DeviceStatusCell extends React.PureComponent<IDeviceStatusCellProps> {
  public render(): JSX.Element {
    return (
      <div className={classNames("device-status",
        {
          "device-status__online": this.props.status === DeviceStatus.Online
        },
        {
          "device-status__locked": this.props.status === DeviceStatus.Locked
        },
        {
          "device-status__offline": this.props.status === DeviceStatus.Offline
        },
        {
          "device-status__unknown": this.props.status === DeviceStatus.Unknown
        },
        {
          "device-status__failed-to-initialize": this.props.status === DeviceStatus.FailedToInitialize
        },
        {
          "device-status__initialize": this.props.status === DeviceStatus.Initialize
        },
        {
          "device-status__locked-offline": this.props.status === DeviceStatus.LockedOffline
        },
      )}>
        {DeviceStatusName.get(this.props.status)}
      </div>
    );
  }
}
