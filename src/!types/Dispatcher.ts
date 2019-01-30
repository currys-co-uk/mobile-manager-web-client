import { IStore } from "../_shared/models/IStore";
import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export type Dispatch<TStore = IStore> = ThunkDispatch<IStore, undefined, Action>;
export type GetState<TStore = IStore> = () => IStore;
export type ThunkResult<R, TStore = IStore> = ThunkAction<Promise<R>, TStore, undefined, Action>;
