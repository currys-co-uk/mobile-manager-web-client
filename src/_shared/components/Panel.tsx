import * as React from 'react';

interface IPanelProps {
  caption: string;
  tabs?: string[];
  currentPath?: string;
}

export class Panel extends React.PureComponent<IPanelProps> {

  public render(): JSX.Element {
    return (
      <div className="panel">
        <div className="panel__heading">
          <div className="panel__heading-title">
            {this.props.caption}
          </div>
        </div>
        <div className="panel__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
