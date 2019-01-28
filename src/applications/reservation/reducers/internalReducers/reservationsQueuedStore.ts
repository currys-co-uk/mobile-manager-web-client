import * as Immutable from 'immutable';
import { IReservationQueued } from "../../../../_shared/api/models/IReservationQueued";
import { ReservationQueuedActionTypesEnum } from "../../constants/reservationQueuedActionTypes";
import { ReservationQueuedActionTypes } from "../../actions/type/actionTypes";

const initialState = Immutable.List<IReservationQueued>([]);
export const reservationQueuedStore = (state: Immutable.List<IReservationQueued> = initialState, action: ReservationQueuedActionTypes): Immutable.List<IReservationQueued> => {
  switch (action.type) {
    case ReservationQueuedActionTypesEnum.LoadReservationsQueued:
      return action.payload.reservationsQueued;
    case ReservationQueuedActionTypesEnum.RemoveReservation:
      return Immutable.List<IReservationQueued>(state.filterNot((reservation: IReservationQueued) => reservation.id === action.payload.reservationQueued.id));

    default: {
      return state;
    }
  }
};
