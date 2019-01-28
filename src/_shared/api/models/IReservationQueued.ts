import { IRequestedDevice } from "./IRequestedDevice";

export interface IReservationQueued {
  id: string;
  dateCreated: Date;
  requestedDevices: IRequestedDevice[];
}
