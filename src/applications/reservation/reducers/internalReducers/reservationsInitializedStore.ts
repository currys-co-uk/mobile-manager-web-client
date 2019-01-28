import { ReservationAppliedActionTypesEnum } from "../../constants/reservationAppliedActionTypes";
import { ReservationAppliedActionTypes } from "../../actions/type/actionTypes";

const initialState = false;
export const reservationsInitializedStore = (state: boolean = initialState, action: ReservationAppliedActionTypes): boolean => {
  switch (action.type) {
    case ReservationAppliedActionTypesEnum.LoadReservationsApplied:
      return true;

    default: {
      return state;
    }
  }
};
