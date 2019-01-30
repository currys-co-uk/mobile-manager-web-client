import { ReservationClient } from "../../../../_shared/api/client/ReservationClient";
import { Dispatch, ThunkResult } from "../../../../!types/Dispatcher";
import { IReservation } from "../../../../_shared/api/models/IReservation";
import { requestLoadingFinished, requestLoadingStarted } from "../../../../_shared/actionCreators/publicActionCreator";

export const createDeviceReservationActionCreator = (deps: ReservationClient, reservation: IReservation) => (): ThunkResult<void> => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestLoadingStarted());
      const deviceReservation = await deps.createReservation(reservation);
      window.alert('reservation created with ID:' +  deviceReservation.id);
    }
    catch (e) {
      window.alert('create reservation failed');
    }
    finally {
      dispatch(requestLoadingFinished());
    }
  };
};
