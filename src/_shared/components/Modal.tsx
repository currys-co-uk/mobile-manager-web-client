import * as React from 'react';
import * as ReactModal from 'react-modal';

export interface IModalCallbackProps {
  onCloseCallback(): void;
}

interface IModalProps extends IModalCallbackProps {
  showModal: boolean;
}

export class Modal extends React.PureComponent<IModalProps> {

  constructor(props: IModalProps) {
    super(props);
  }

  public render(): JSX.Element {
    const resetModalStyle = (() => {
      const initial = null;

      const overlay = {
        position: initial,
        top: initial,
        left: initial,
        right: initial,
        bottom: initial,
        backgroundColor: initial,
        WebkitOverflowScrolling: initial,
        zIndex: initial,
      };

      const content = {
        position: initial,
        top: initial,
        left: initial,
        right: initial,
        bottom: initial,
        border: initial,
        background: initial,
        overflow: initial,
        borderRadius: initial,
        outline: initial,
        padding: initial,
      };

      return {overlay, content}
    })()

    return (
      <ReactModal
        isOpen={this.props.showModal}
        onRequestClose={this.props.onCloseCallback}
        overlayClassName="modal"
        shouldCloseOnEsc={true}
        role={'dialog'}
        contentLabel={''}
        style={resetModalStyle}
        ariaHideApp={false}
      >
        <div
          className="modal__container"
        >
          <div
            className="modal__main"
          >
            <div className="modal__header">
              <div
                className="modal__close glyphicon glyphicon-remove"
                onClick={this.props.onCloseCallback}
              />
            </div>
            {this.props.children}
          </div>
        </div>
      </ReactModal>
    );
  }
}
