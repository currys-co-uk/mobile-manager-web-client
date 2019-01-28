import { combineReducers } from "redux";
import { loadingInProgress } from "./internalReducers/loadingReducerStore";

export const sharedAppReducer = combineReducers<ISharedStore>({
  loadingInProgress
});
