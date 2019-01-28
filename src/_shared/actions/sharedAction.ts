import { Action } from "redux";
import { LoadingInProgressActionTypesEnum } from "../../applications/reservation/actions/type/loadingInProgressEnum";

export interface IStartLodingInProgressAction extends Action {
  type: LoadingInProgressActionTypesEnum.Started;
}

export interface IFinishLodingInProgressAction extends Action {
  type: LoadingInProgressActionTypesEnum.Finished;
}


export const requestInProgressStartedAction = (): IStartLodingInProgressAction => ({
  type: LoadingInProgressActionTypesEnum.Started,
});

export const requestInProgressFinishedAction = (): IFinishLodingInProgressAction => ({
  type: LoadingInProgressActionTypesEnum.Finished,
});
