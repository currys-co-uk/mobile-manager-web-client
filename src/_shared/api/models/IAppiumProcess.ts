export interface IAppiumProcess {
  deviceId: string;
  appiumPort: string;
  appiumBootstrapPort: string;
  appiumPid: number;
  webkitDebugProxyPort: string;
  wdaLocalPort: string;
}
