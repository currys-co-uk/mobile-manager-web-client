import { LoadingInProgressActionTypesEnum } from "../../../applications/reservation/actions/type/loadingInProgressEnum";
import { ILoadingInProgressActionTypes } from "../../actions/type/actionTypes";

const initialState = false;
export const loadingInProgress = (state: boolean = initialState, action: ILoadingInProgressActionTypes): boolean => {
  switch (action.type) {
    case LoadingInProgressActionTypesEnum.Started:
      return true;
    case LoadingInProgressActionTypesEnum.Finished:
      return false;

    default: {
      return state;
    }
  }
};
