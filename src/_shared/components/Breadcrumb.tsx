import * as React from "react";

interface IBreadcrumb {
  title: string;
  description?: string;
}

export class Breadcrumb extends React.PureComponent<IBreadcrumb> {
  public render(): JSX.Element {
    return (
      <div className="breadcrumb">
        <i className="glyphicon glyphicon-home breadcrumb__home" />
        <div className="breadcrumb__title">{this.props.title}</div>
        <div className="breadcrumb__description">{this.props.description}</div>
      </div>
    );
  }
}
