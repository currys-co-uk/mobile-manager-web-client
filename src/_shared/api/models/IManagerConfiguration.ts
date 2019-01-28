export interface IManagerConfiguration {
  readonly localIpAddress?: string;
  listeningIpAddress?: string;
  listeningPort?: number;
  iosDeviceServiceRefreshTime?: number;
  reservationServiceRefreshTime?: number;
  androidDeviceServiceRefreshTime?: number;
  globalReconnectTimeout?: number;
  appiumPortRangeMin?: number;
  appiumPortRangeMax?: number;
  appiumLogFilePath?: string;
  ideviceSyslogFolderPath?: string;
  projectVersion?: string;
  xcodePath?: string;
  androidServiceEnabled?: boolean;
  iosServiceEnabled?: boolean;
}
