import { ReservationClient } from "../../../_shared/api/client/ReservationClient";
import { IReservationApplied } from "../../../_shared/api/models/IReservationApplied";
import { removeReservationAppliedActionCreator } from "./internalActionCreators/removeAppliedReservation";
import { loadReservationAppliedActionCreator } from "./internalActionCreators/loadAppliedReservations";
import { removeReservationQueuedActionCreator } from "./internalActionCreators/removeQueuedReservation";
import { IReservationQueued } from "../../../_shared/api/models/IReservationQueued";
import { loadReservationQueuedActionCreator } from "./internalActionCreators/loadQueuedReservations";
import { IReservation } from "../../../_shared/api/models/IReservation";
import { createDeviceReservationActionCreator } from "./internalActionCreators/createDeviceReservation";
import { runtimeConfig } from "../../../runtimeConfig";

const reservationClient = new ReservationClient({apiEndpoint: runtimeConfig.mobileManagerApi});

export const createDeviceReservation = (reservation: IReservation) => createDeviceReservationActionCreator(reservationClient, reservation)();
export const removeReservationApplied = (reservation: IReservationApplied) => removeReservationAppliedActionCreator(reservationClient, reservation)();
export const removeReservationQueued = (reservation: IReservationQueued) => removeReservationQueuedActionCreator(reservationClient, reservation)();

export const loadReservationsApplied = () => loadReservationAppliedActionCreator(reservationClient)();
export const loadReservationsQueued = () => loadReservationQueuedActionCreator(reservationClient)();
