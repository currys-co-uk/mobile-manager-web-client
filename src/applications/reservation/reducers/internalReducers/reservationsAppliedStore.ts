import * as Immutable from 'immutable';
import { IReservationApplied } from "../../../../_shared/api/models/IReservationApplied";
import { ReservationAppliedActionTypesEnum } from "../../constants/reservationAppliedActionTypes";
import { ReservationAppliedActionTypes } from "../../actions/type/actionTypes";

const initialState = Immutable.List<IReservationApplied>([]);
export const reservationAppliedStore = (state: Immutable.List<IReservationApplied> = initialState, action: ReservationAppliedActionTypes): Immutable.List<IReservationApplied> => {
  switch (action.type) {
    case ReservationAppliedActionTypesEnum.LoadReservationsApplied:
      return action.payload.reservationsApplied;
    case ReservationAppliedActionTypesEnum.RemoveReservation:
      return Immutable.List<IReservationApplied>(state.filterNot((reservation: IReservationApplied) => reservation.id === action.payload.reservationApplied.id));

    default: {
      return state;
    }
  }
};
