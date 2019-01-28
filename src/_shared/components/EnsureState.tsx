import * as React from 'react';
import { ReactNode } from "react";

export interface IEnsureStateDataProps {
  readonly isValidState: boolean;
}

export interface IEnsureStateCallbackProps {
  readonly onEnterCallback?: () => void;
}

interface IEnsureState extends IEnsureStateDataProps, IEnsureStateCallbackProps {
}

export class EnsureState extends React.PureComponent<IEnsureState> {

  public componentDidMount() {
    if (this.props.onEnterCallback) {
      this.props.onEnterCallback();
    }
  }

  public render(): ReactNode | null {
    const { children, isValidState } = this.props;
    return isValidState ? children : 'Loading component...';
  }
}
