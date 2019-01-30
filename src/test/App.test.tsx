import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DeviceClient } from '../_shared/api/client/DeviceClient';
import { App } from "../components/App";
import { ReservationClient } from "../_shared/api/client/ReservationClient";
import { IReservation } from "../_shared/api/models/IReservation";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('gets devices from API', async (done) => {
  const deviceClient = new DeviceClient({'apiEndpoint': 'http://localhost'});
  const devices = await deviceClient.getDevices();
  const mockId = "awefawefawefawef";
  devices[0].id = mockId;
  await deviceClient.createDevice(devices[0]);
  await deviceClient.deleteDevice(devices[0]);
  done(true);
});


it('creates reservation to API', async (done) => {
  const api = new ReservationClient({'apiEndpoint': 'http://localhost'});
  const devices: IReservation = {
    requestedDevices: [{
      deviceId: "awefawefawefawef"
    }]
  };
  const response = await api.createReservation(devices);
  console.log(response);
  done(true);
});

