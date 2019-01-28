import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from '../../../!types/Dispatcher';
import {
  EnsureState,
  IEnsureStateCallbackProps,
  IEnsureStateDataProps,
} from '../../../_shared/components/EnsureState';
import { IStore } from "../../../_shared/models/IStore";
import { loadDevices } from "../actionCreators/publicActionCreator";
import { loadReservationsApplied } from "../../reservation/actionCreators/publicActionCreator";

function mapStateToProps(state: IStore): IEnsureStateDataProps {
  return {
    isValidState: state.devicesStore.initialized && state.reservationStore.reservationsInitialized,
  };
}

function mapDispatchToProps(dispatch: Dispatch): IEnsureStateCallbackProps {
  return {
    onEnterCallback: () => {
      dispatch(loadDevices());
      dispatch(loadReservationsApplied());
    },
  };
}

export const EnsureDevicesAndReservationsLoaded: React.ComponentClass = connect(mapStateToProps, mapDispatchToProps)(EnsureState);
