import * as React from 'react';
import { Breadcrumb } from "../../../_shared/components/Breadcrumb";
import { ReservationsAppliedDataGrid } from "../containers/ReservationsAppliedDataGrid";
import { ReservationsQueuedDataGrid } from "../containers/ReservationsQueuedDataGrid";
import { Panel } from "../../../_shared/components/Panel";
import { Modal } from "../../../_shared/components/Modal";
import { ReserveDevicesForm } from "../containers/ReserveDeviceForm";
import { EnsureDevicesAndReservationsLoaded } from "../../devices/containers/EnsureDeviceLoaded";

interface IReservationState {
  showModal: boolean;
}

export class Reservation extends React.PureComponent<{}, IReservationState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      showModal: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }


  public render(): JSX.Element {
    return (
      <>
        <Breadcrumb
          title={'Reservations'}
        />
        <div className="reservations">
          <div className="reservations__create">
            <button
              className="reservations__create-button"
              onClick={e => this.showModal(e)}
            >Create reservation
            </button>
          </div>
          <div className="reservations__applied">
            <div className="reservations__content">
              <Panel caption={'Reservations Applied'}>
                <ReservationsAppliedDataGrid/>
              </Panel>
            </div>
          </div>
          <div className="reservations__queued">
            <div className="reservations__content">
              <Panel caption={'Reservations Queued'}>
                <ReservationsQueuedDataGrid/>
              </Panel>
            </div>
          </div>
        </div>
        <Modal
          showModal={this.state.showModal}
          onCloseCallback={this.hideModal}
        >
          <EnsureDevicesAndReservationsLoaded>
            <ReserveDevicesForm onCloseCallback={this.hideModal}/>
          </EnsureDevicesAndReservationsLoaded>
        </Modal>

      </>
    );
  }

  private showModal(event: React.MouseEvent<HTMLButtonElement>): void {
    this.setState({
        showModal: true
      }
    );
  }

  private hideModal(): void {
    this.setState({
      showModal: false
    })
  }
}
