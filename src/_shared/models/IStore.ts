import {IDevicesStoreState} from "../../applications/devices/model/IDevicesStoreState";
import {IReservationsStoreState} from "../../applications/reservation/model/IReservationsStoreState";
import { IConfigurationStoreState } from "../../applications/administration/model/IConfigurationStoreState";

export interface IStore {
  readonly devicesStore: IDevicesStoreState;
  readonly reservationStore: IReservationsStoreState;
  readonly configurationStore: IConfigurationStoreState;
  readonly sharedStore: ISharedStore
}
