import { IRequestedDevice } from './IRequestedDevice';

export interface IReservation {
  id?: string;
  dateCreated?: Date;
  requestedDevices: IRequestedDevice[];
  failedToApply?: number
}
