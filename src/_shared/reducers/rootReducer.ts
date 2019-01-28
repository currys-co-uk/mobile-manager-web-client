import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {devicesAppReducer} from "../../applications/devices/reducers/devicesStateReducers";
import {IStore} from "../models/IStore";
import {reservationsAppReducer} from "../../applications/reservation/reducers/reservationsStateReducer";
import {configurationAppReducer} from "../../applications/administration/reducers/configurationStateReducer";
import {sharedAppReducer} from "./sharedReducer";
import {composeWithDevTools} from 'redux-devtools-extension';


export const rootReducer = combineReducers<IStore>({
  devicesStore: devicesAppReducer,
  reservationStore: reservationsAppReducer,
  configurationStore: configurationAppReducer,
  sharedStore: sharedAppReducer
});

const composeWithDev = composeWithDevTools({
});

const composeEnhancers = process.env.REACT_APP_ENV === 'development' ? composeWithDev : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
);
