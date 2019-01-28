import * as Immutable from 'immutable';
import {Dispatch, ThunkResult } from "../../../../!types/Dispatcher";
import {ReservationClient} from "../../../../_shared/api/client/ReservationClient";
import { loadReservationsQueuedAction } from "../../actions/reservationQueuedActions";
import { IReservationQueued } from "../../../../_shared/api/models/IReservationQueued";

export const loadReservationQueuedActionCreator = (deps: ReservationClient) => (): ThunkResult<void> => {
  return async (dispatch: Dispatch) => {
    try {
      const reservations = await deps.loadReservationsQueued();
      dispatch(loadReservationsQueuedAction(Immutable.List<IReservationQueued>(reservations)));
    }
    catch {
      console.error('error during loading reservations');
    }
  };
};
