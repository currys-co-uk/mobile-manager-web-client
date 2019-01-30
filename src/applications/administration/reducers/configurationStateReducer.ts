import { combineReducers } from "redux";
import { configurationStore } from "./internalReducers/configurationStore";
import { IConfigurationStoreState } from "../model/IConfigurationStoreState";

export const configurationAppReducer = combineReducers<IConfigurationStoreState>({
  managerConfguration: configurationStore
});
