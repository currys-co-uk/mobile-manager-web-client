import { combineReducers } from "redux";
import { IReservationsStoreState } from "../model/IReservationsStoreState";
import { reservationQueuedStore } from "./internalReducers/reservationsQueuedStore";
import { reservationAppliedStore } from "./internalReducers/reservationsAppliedStore";
import { reservationsInitializedStore } from "./internalReducers/reservationsInitializedStore";
export const reservationsAppReducer = combineReducers<IReservationsStoreState>({
  reservationsApplied: reservationAppliedStore,
  reservationsQueued: reservationQueuedStore,
  reservationsInitialized: reservationsInitializedStore
});
