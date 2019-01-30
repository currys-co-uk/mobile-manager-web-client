interface IRuntimeConfig {
  mobileManagerApi: string;
  mobileManagerServerUrl: string;
}

export const runtimeConfig: IRuntimeConfig = {
  mobileManagerApi: process.env.REACT_APP_mobileManagerApi || '',
  mobileManagerServerUrl: process.env.REACT_APP_mobileManagerServerUrl || ''
};
