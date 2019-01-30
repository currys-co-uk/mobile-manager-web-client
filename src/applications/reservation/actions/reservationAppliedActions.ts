import * as Immutable from 'immutable';
import { Action } from "redux";
import { ReservationAppliedActionTypesEnum } from "../constants/reservationAppliedActionTypes";
import { IReservationApplied } from "../../../_shared/api/models/IReservationApplied";

export interface IReservationAppliedRemoveReservationAction extends Action {
  type: ReservationAppliedActionTypesEnum.RemoveReservation,
  payload: {
    reservationApplied: IReservationApplied
  }
}

export interface IReservationAppliedLoadReservationsAction extends Action {
  type: ReservationAppliedActionTypesEnum.LoadReservationsApplied,
  payload: {
    reservationsApplied: Immutable.List<IReservationApplied>
  }
}

export const loadReservationsAppliedAction = (reservations: Immutable.List<IReservationApplied>): IReservationAppliedLoadReservationsAction => ({
  type: ReservationAppliedActionTypesEnum.LoadReservationsApplied,
  payload: {
    reservationsApplied: reservations
  },
});

export const removeReservationAppliedAction = (reservation: IReservationApplied): IReservationAppliedRemoveReservationAction => ({
  type: ReservationAppliedActionTypesEnum.RemoveReservation,
  payload: {
    reservationApplied: reservation
  },
});

