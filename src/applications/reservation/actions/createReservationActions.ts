import { Action } from "redux";
import { ReservationAppliedActionTypesEnum } from "../constants/reservationAppliedActionTypes";
import { IReservationApplied } from "../../../_shared/api/models/IReservationApplied";

export interface IReservationAppliedRemoveReservationAction extends Action {
  type: ReservationAppliedActionTypesEnum.RemoveReservation,
  payload: {
    reservationApplied: IReservationApplied
  }
}
