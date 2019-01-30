import {
  IReservationQueuedLoadReservationsAction,
  IReservationQueuedRemoveReservationAction
} from "../reservationQueuedActions";
import {
  IReservationAppliedLoadReservationsAction,
  IReservationAppliedRemoveReservationAction
} from "../reservationAppliedActions";


export type ReservationQueuedActionTypes =
  | IReservationQueuedRemoveReservationAction
  | IReservationQueuedLoadReservationsAction;

export type ReservationAppliedActionTypes =
  | IReservationAppliedRemoveReservationAction
  | IReservationAppliedLoadReservationsAction;
