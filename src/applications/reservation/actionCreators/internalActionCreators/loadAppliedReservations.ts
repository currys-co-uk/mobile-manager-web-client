import * as Immutable from 'immutable';
import {Dispatch, ThunkResult } from "../../../../!types/Dispatcher";
import {loadReservationsAppliedAction} from "../../actions/reservationAppliedActions";
import {ReservationClient} from "../../../../_shared/api/client/ReservationClient";
import {IReservationApplied} from "../../../../_shared/api/models/IReservationApplied";

export const loadReservationAppliedActionCreator = (deps: ReservationClient) => (): ThunkResult<void> => {
  return async (dispatch: Dispatch) => {
    try {
      const reservations = await deps.loadReservationsApplied();
      dispatch(loadReservationsAppliedAction(Immutable.List<IReservationApplied>(reservations)));
    }
    catch {
      console.error('error during loading reservations');
    }
  };
};
