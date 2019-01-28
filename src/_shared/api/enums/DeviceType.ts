import * as Immutable from 'immutable'
export enum DeviceType {
  Unspecified = 'Unspecified',
  Android = 'Android',
  iOS = 'IOS'
}

export const AllDeviceTypes: DeviceType[] = [
  DeviceType.Android,
  DeviceType.iOS,
  DeviceType.Unspecified
]

export const DeviceTypeName = Immutable.Map<DeviceType, string>([
  [DeviceType.iOS, 'iOS'],
  [DeviceType.Android, 'Android'],
  [DeviceType.Unspecified, 'Unspecified'],
]);
