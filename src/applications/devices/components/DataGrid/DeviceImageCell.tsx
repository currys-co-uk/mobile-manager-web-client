import * as React from 'react';
import { DeviceType } from "../../../../_shared/api/enums/DeviceType";
import * as classNames from 'classnames';

interface IDeviceTypeCellProps {
  type: DeviceType
}

export class DeviceImageCell extends React.PureComponent<IDeviceTypeCellProps> {
  public render(): JSX.Element {
    return (
      <i className={classNames("device-type",
        {
          'fab fa-apple device-type__ios': this.props.type === DeviceType.iOS
        },
        {
          'fab fa-android device-type__android': this.props.type === DeviceType.Android
        },
        {
          'far fa-question-circle': this.props.type === DeviceType.Unspecified
        }
      )}/>
    );
  }
}
