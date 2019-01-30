import 'whatwg-fetch'
import {IDevice} from '../models/IDevice';
import { IRestClient } from "./IRestClient";

export class DeviceClient {

  private readonly ApiEndpoint: string;

  constructor(props: IRestClient) {
    this.ApiEndpoint = props.apiEndpoint;
  }

  public async getDevices(): Promise<IDevice[]> {
    return fetch(`${this.ApiEndpoint}/device`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(response.statusText);
      }).catch(error => console.log(error));
  }

  public async getDevice(device: IDevice): Promise<IDevice> {
    return fetch(`${this.ApiEndpoint}/device/${device.id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(response.statusText);
      }).catch(error => console.log(error));
  }

  public async createDevice(device: IDevice): Promise<number> {
    return fetch(`${this.ApiEndpoint}/device`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(device)
    }).then(response => {
      return response.json();
    }).catch(error => console.log(error));
  }

  public async deleteDevice(device: IDevice): Promise<number> {
    const url = `${this.ApiEndpoint}/device/${device.id}`;
    return fetch(url, {
      method: "DELETE"
    }).then(response => {
      return response.json();
    }).catch(error => console.log(error));
  }
}
