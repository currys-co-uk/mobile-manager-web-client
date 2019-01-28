import { ReservationClient } from "../../../../_shared/api/client/ReservationClient";
import { IReservationQueued } from "../../../../_shared/api/models/IReservationQueued";
import { Dispatch, ThunkResult } from "../../../../!types/Dispatcher";
import { removeReservationQueuedAction } from "../../actions/reservationQueuedActions";
import { requestLoadingFinished, requestLoadingStarted } from "../../../../_shared/actionCreators/publicActionCreator";

export const removeReservationQueuedActionCreator = (deps: ReservationClient, reservationQueued: IReservationQueued) => (): ThunkResult<void> => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestLoadingStarted());
      await deps.removeReservationQueued(reservationQueued);
      dispatch(removeReservationQueuedAction(reservationQueued));
    }
    catch {
      console.error('error during remove reservation');
    }
    finally {
      dispatch(requestLoadingFinished());
    }
  };
};
