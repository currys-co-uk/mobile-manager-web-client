import { IStore } from "../../../_shared/models/IStore";
import {
  IReservationsQueuedDataGridDataProps,
  IReservationsQueuedDataGridCallBackProps, ReservationsQueuedDataGrid
} from "../components/ReservationsQueuedDataGrid";
import { connect } from "react-redux";
import { IReservationQueued } from "../../../_shared/api/models/IReservationQueued";
import {Dispatch} from "../../../!types/Dispatcher";
import { loadReservationsQueued, removeReservationQueued } from "../actionCreators/publicActionCreator";

function mapStateToProps(state: IStore): IReservationsQueuedDataGridDataProps {
  const columns = [
    {title: 'ID', width: 6, align: 'left'},
    {title: 'Date Created', width: 6, align: 'left'},
    {title: 'Requested Devices', width: 6, align: 'left'},
    {title: 'Commands', width: 4, align: 'center'},
  ];
  return {
    QueuedReservations: state.reservationStore.reservationsQueued,
    columns
  }
}

function mapDispatchToProps(dispatch: Dispatch): IReservationsQueuedDataGridCallBackProps {
  return {
    refreshReservations: () => dispatch(loadReservationsQueued()),
    removeReservation: (reservation: IReservationQueued) => dispatch(removeReservationQueued(reservation))
  }
}

const ReservationsQueuedDataGridContainer: React.ComponentClass = connect(mapStateToProps, mapDispatchToProps)(ReservationsQueuedDataGrid);

export { ReservationsQueuedDataGridContainer as ReservationsQueuedDataGrid }
