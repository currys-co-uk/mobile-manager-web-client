import * as React from 'react';
import * as classNames from 'classnames';

export interface IDataGridCellProps {
  title: string;
  width: number;
  align: string;
}

export class DataGridCell extends React.PureComponent<IDataGridCellProps> {

  public render(): JSX.Element {
    return (

      <div className={classNames('datagrid__cell',
        {
          'datagrid__cell--center': this.props.align === 'center'
        },
        {
          'datagrid__cell--grow-2': this.props.width === 2
        },
        {
          'datagrid__cell--grow-3': this.props.width === 3
        },
        {
          'datagrid__cell--grow-4': this.props.width === 4
        },
        {
          'datagrid__cell--grow-6': this.props.width === 6
        },
        {
          'datagrid__cell--grow-8': this.props.width === 8
        },
        {
          'datagrid__cell--grow-10': this.props.width === 10
        },
      )}>
        <div className="datagrid__column--minimal">
          {this.props.title}
        </div>
        <div className="datagrid__cell-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
