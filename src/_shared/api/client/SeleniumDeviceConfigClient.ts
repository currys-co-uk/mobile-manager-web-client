import 'whatwg-fetch'
import { IRestClient } from "./IRestClient";

export class SeleniumDeviceConfigClient {

  private readonly ApiEndpoint: string;

  constructor(props: IRestClient) {
    this.ApiEndpoint = props.apiEndpoint;
  }

  public async getSeleniumConfig(deviceId: string): Promise<string> {
    return fetch(`${this.ApiEndpoint}/device/seleniumconfig/${deviceId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(response.statusText);
      }).catch(error => console.log(error));
  }
}
