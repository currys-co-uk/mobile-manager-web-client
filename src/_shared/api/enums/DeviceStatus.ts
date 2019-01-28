import * as Immutable from 'immutable'
export enum DeviceStatus {
  Unknown = 'Unknown',
  Online = 'Online',
  Offline = 'Offline',
  Locked = 'Locked',
  LockedOffline = 'LockedOffline',
  Initialize = 'Initialize',
  FailedToInitialize = 'FailedToInitialize'
}

export const AllDeviceStatuses: DeviceStatus[] = [
  DeviceStatus.Unknown,
  DeviceStatus.Online,
  DeviceStatus.Offline,
  DeviceStatus.Locked,
  DeviceStatus.LockedOffline,
  DeviceStatus.Initialize,
  DeviceStatus.FailedToInitialize,
]

export const DeviceStatusName = Immutable.Map<DeviceStatus, string>([
  [DeviceStatus.Unknown, 'Unknown'],
  [DeviceStatus.Online, 'Online'],
  [DeviceStatus.Offline, 'Offline'],
  [DeviceStatus.Locked, 'Locked'],
  [DeviceStatus.LockedOffline, 'Locked Offline'],
  [DeviceStatus.Initialize, 'Initialize'],
  [DeviceStatus.FailedToInitialize, 'Failed To Initialize'],
]);
