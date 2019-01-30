import { IFinishLodingInProgressAction, IStartLodingInProgressAction } from "../sharedAction";


export type ILoadingInProgressActionTypes =
  | IStartLodingInProgressAction
  | IFinishLodingInProgressAction;
