import * as React from "react";

export interface ILoadingIndicatorProps {
  isLoading: boolean;
}

interface ILoadingIndicatorStateProps {
  timer: NodeJS.Timeout | null;
  isTimedOut: boolean;
}

export class LoadingIndicator extends React.PureComponent<ILoadingIndicatorProps, ILoadingIndicatorStateProps> {

  constructor(props: ILoadingIndicatorProps) {
    super(props);
    this.state = {
      timer: null,
      isTimedOut: false
    }
  }

  public componentWillReceiveProps(nextProps: Readonly<ILoadingIndicatorProps>, nextContext: any): void {
    if (nextProps.isLoading && !this.state.isTimedOut) {
      this.setState({
        timer: setTimeout(() => this.setState({isTimedOut: true}), 500)
      })
    } else {
      if (this.state.timer) {
        clearTimeout(this.state.timer);
        this.setState({
          isTimedOut: false
        });
      }
    }
  }


  public render(): JSX.Element | null {

    if (this.props.isLoading && this.state.isTimedOut) {
      return (
        <div className="loading-indicator">
          <div className="lds-roller">
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
