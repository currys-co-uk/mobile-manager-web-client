import * as React from 'react';
import * as classNames from 'classnames';

export interface IDropdownOptionDataProps {
  option: IDropdownOption;
  isSelected: boolean;
}

export interface IDropdownOption {
  label: string;
  value: string;
}

export interface IDropdownOptionCallbackProps {
  onSelectClick?: (param: IDropdownOption) => void;
}

interface IDropdownProps extends IDropdownOptionDataProps, IDropdownOptionCallbackProps {
}

export class DropdownOption extends React.PureComponent<IDropdownProps> {

  public render(): JSX.Element {
    const onClickCallback = this.props.onSelectClick ? this.props.onSelectClick : undefined;
    return (
      <div
        className={
          classNames('dropdown__option',
            {'dropdown__option--selected': this.props.isSelected}
          )}
        onClick={onClickCallback ? () => onClickCallback(this.props.option) : undefined}
      >
        {this.props.option.label}
      </div>
    );
  }
}
