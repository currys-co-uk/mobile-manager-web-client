import * as Immutable from 'immutable';
import { Action } from "redux";
import { ReservationQueuedActionTypesEnum } from "../constants/reservationQueuedActionTypes";
import { IReservationQueued } from "../../../_shared/api/models/IReservationQueued";

export interface IReservationQueuedRemoveReservationAction extends Action {
  type: ReservationQueuedActionTypesEnum.RemoveReservation,
  payload: {
    reservationQueued: IReservationQueued
  }
}

export interface IReservationQueuedLoadReservationsAction extends Action {
  type: ReservationQueuedActionTypesEnum.LoadReservationsQueued,
  payload: {
    reservationsQueued: Immutable.List<IReservationQueued>
  }
}

export const loadReservationsQueuedAction = (reservations: Immutable.List<IReservationQueued>): IReservationQueuedLoadReservationsAction => ({
  type: ReservationQueuedActionTypesEnum.LoadReservationsQueued,
  payload: {
    reservationsQueued: reservations
  },
});

export const removeReservationQueuedAction = (reservation: IReservationQueued): IReservationQueuedRemoveReservationAction => ({
  type: ReservationQueuedActionTypesEnum.RemoveReservation,
  payload: {
    reservationQueued: reservation
  },
});
