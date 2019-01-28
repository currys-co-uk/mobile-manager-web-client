import { requestInProgressFinishedAction, requestInProgressStartedAction } from "../actions/sharedAction";

export const requestLoadingStarted = () => requestInProgressStartedAction();
export const requestLoadingFinished = () => requestInProgressFinishedAction();
