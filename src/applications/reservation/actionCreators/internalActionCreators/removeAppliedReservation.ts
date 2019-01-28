import { ReservationClient } from "../../../../_shared/api/client/ReservationClient";
import { IReservationApplied } from "../../../../_shared/api/models/IReservationApplied";
import { Dispatch, ThunkResult } from "../../../../!types/Dispatcher";
import { removeReservationAppliedAction } from "../../actions/reservationAppliedActions";
import { requestLoadingFinished, requestLoadingStarted } from "../../../../_shared/actionCreators/publicActionCreator";

export const removeReservationAppliedActionCreator = (deps: ReservationClient, reservationApplied: IReservationApplied) => (): ThunkResult<void> => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestLoadingStarted());
      await deps.removeReservationApplied(reservationApplied);
      dispatch(removeReservationAppliedAction(reservationApplied));
    }
    catch {
      console.error('error during remove reservation');
    }
    finally {
      dispatch(requestLoadingFinished());
    }
  };
};
