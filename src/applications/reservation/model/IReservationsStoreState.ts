import * as Immutable from 'immutable';
import { IReservationApplied } from "../../../_shared/api/models/IReservationApplied";
import { IReservationQueued } from "../../../_shared/api/models/IReservationQueued";

export interface IReservationsStoreState {
  readonly reservationsApplied: Immutable.List<IReservationApplied>;
  readonly reservationsQueued: Immutable.List<IReservationQueued>;
  readonly reservationsInitialized: boolean;
}
