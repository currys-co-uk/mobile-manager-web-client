import 'whatwg-fetch'
import { IReservation } from "../models/IReservation";
import {IReservationApplied} from "../models/IReservationApplied";
import { IReservationQueued } from "../models/IReservationQueued";
import { IRestClient } from "./IRestClient";

export class ReservationClient {

  private readonly ApiEndpoint: string;

  constructor(props: IRestClient) {
    this.ApiEndpoint = props.apiEndpoint;
  }

  public async createReservation(reservation: IReservation): Promise<IReservation> {
    return fetch(`${this.ApiEndpoint}/reservation`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
    }).then(response => {
      return response.json();
    }).catch(error => console.error(error));
  }

  public async removeReservationApplied(reservation: IReservationApplied): Promise<IReservationApplied> {
    return fetch(`${this.ApiEndpoint}/reservation/applied/${reservation.id}`, {
      method: "DELETE"
    }).then(response => {
      console.log(response);
      return response.json();
    }).catch(error => console.error(error));
  }

  public async removeReservationQueued(reservation: IReservationQueued): Promise<IReservationQueued> {
    return fetch(`${this.ApiEndpoint}/reservation/${reservation.id}`, {
      method: "DELETE"
    }).then(response => {
      return response.json();
    }).catch(error => console.error(error));
  }

  public async loadReservationsApplied(): Promise<IReservationApplied[]> {
    return fetch(`${this.ApiEndpoint}/reservation/applied`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
      return response.json();
    }).catch(error => console.error(error));
  }

  public async loadReservationsQueued(): Promise<IReservationApplied[]> {
    return fetch(`${this.ApiEndpoint}/reservation`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
      return response.json();
    }).catch(error => console.error(error));
  }
}
