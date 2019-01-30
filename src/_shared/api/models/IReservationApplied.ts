import { IReservedDevice } from './IReservedDevice';

export interface IReservationApplied {
    id: string;
    dateCreated: Date;
    reservedDevices: IReservedDevice[];
    available: boolean;
    failedToApply: number;
}
