import 'whatwg-fetch'
import { IRestClient } from "./IRestClient";
import { IManagerConfiguration } from "../models/IManagerConfiguration";

export class ConfigurationClient {

  private readonly ApiEndpoint: string;

  constructor(props: IRestClient) {
    this.ApiEndpoint = props.apiEndpoint;
  }

  public async getConfiguration(): Promise<IManagerConfiguration> {
    return fetch(`${this.ApiEndpoint}/configuration`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(response.statusText);
      }).catch(error => console.log(error));
  }
}
