import * as React from 'react';
import { IStore } from "../../../_shared/models/IStore";
import {
  IReservationsAppliedDataGridDataProps,
  IReservationsAppliedDataGridCallBackProps, ReservationsAppliedDataGrid
} from "../components/ReservationsAppliedDataGrid";
import { connect } from "react-redux";
import { IReservationApplied } from "../../../_shared/api/models/IReservationApplied";
import { loadReservationsApplied, removeReservationApplied } from "../actionCreators/publicActionCreator";
import {Dispatch} from "../../../!types/Dispatcher";

function mapStateToProps(state: IStore): IReservationsAppliedDataGridDataProps {
  const columns = [
    {title: 'ID', width: 6, align: 'left'},
    {title: 'Date Created', width: 6, align: 'left'},
    {title: 'Reserved Device ID\'s', width: 6, align: 'left'},
    {title: 'Commands', width: 4, align: 'center'},
  ];
  return {
    appliedReservations: state.reservationStore.reservationsApplied,
    columns
  }
}

function mapDispatchToProps(dispatch: Dispatch): IReservationsAppliedDataGridCallBackProps {
  return {
    refreshReservations: () => dispatch(loadReservationsApplied()),
    removeReservation: (reservation: IReservationApplied) => dispatch(removeReservationApplied(reservation))
  }
}

const ReservationsAppliedDataGridContainer: React.ComponentClass = connect(mapStateToProps, mapDispatchToProps)(ReservationsAppliedDataGrid);

export { ReservationsAppliedDataGridContainer as ReservationsAppliedDataGrid }
