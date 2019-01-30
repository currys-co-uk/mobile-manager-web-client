import * as React from 'react';
import * as classNames from 'classnames';

export interface IDataGridColumnProps {
  title: string;
  width: number;
}

export class DataGridColumn extends React.PureComponent<IDataGridColumnProps> {

  public render(): JSX.Element {
    return (

      <div className={classNames('datagrid__column',
        {
          'datagrid__column--grow-2': this.props.width === 2
        },
        {
          'datagrid__column--grow-3': this.props.width === 3
        },
        {
          'datagrid__column--grow-4': this.props.width === 4
        },
        {
          'datagrid__column--grow-6': this.props.width === 6
        },
        {
          'datagrid__column--grow-8': this.props.width === 8
        },
        {
          'datagrid__column--grow-10': this.props.width === 10
        },
      )}>
        <div className="datagrid__column-name">
          {this.props.title}
        </div>
      </div>
    );
  }
}
