import * as React from 'react';
import * as classNames from 'classnames';
import { DropdownOption, IDropdownOption } from "./DropdownOption";

export interface IDropdownDataProps {
  options: IDropdownOption[];
  selectedOption?: IDropdownOption;
  placeholder?: string;
  disabled?: boolean;
}

export interface IDropdownCallbackProps {
  onChangeFilterCallback?: (param: IDropdownOption) => void;
  onClearFilterCallback?: () => void;
}

interface IDropdownProps extends IDropdownDataProps, IDropdownCallbackProps {
}

interface IDropdownStateProps {
  showMenu: boolean;
}

export class Dropdown extends React.PureComponent<IDropdownProps, IDropdownStateProps> {

  private dropdownMenu: HTMLDivElement | null;

  constructor(props: IDropdownProps) {
    super(props);

    this.state = {
      showMenu: false,
    };

    this.showHideMenuEvent = this.showHideMenuEvent.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.onMouseEvent = this.onMouseEvent.bind(this);
    this.onKeyboardEvent = this.onKeyboardEvent.bind(this);
  }

  public render(): JSX.Element {
    const placeholder = this.props.placeholder ? this.props.placeholder : 'Select...';
    return (
      <div
        className="dropdown"
        ref={(element) => {
          this.dropdownMenu = element
        }}
      >
        <div className="dropdown__control">
          <div
            className={classNames("dropdown__selected-value", {'dropdown__selected-value--disabled': this.props.disabled})}
            onClick={this.showHideMenuEvent}>{this.props.selectedOption ? this.props.selectedOption.label : placeholder}</div>
          {
            this.props.selectedOption &&
            <i
                className="dropdown__clearbox glyphicon glyphicon-remove"
                onClick={this.props.onClearFilterCallback}/>
          }
          <i className="dropdown__seprator"/>
          <div
            className={
              classNames(
                'dropdown__indicator',
                {'dropdown__indicator--active': this.state.showMenu},
                {'dropdown__indicator--disabled': this.props.disabled},
                'glyphicon',
                'glyphicon-chevron-down'
              )}
            onClick={this.showHideMenuEvent}
          />
        </div>
        {
          this.state.showMenu &&
          <div className="dropdown__menu">
            {this.props.options && this.props.options.map((option, index) => {
              return (
                <DropdownOption
                  key={index}
                  option={option}
                  isSelected={this.props.selectedOption ? this.props.selectedOption.value === option.value : false}
                  onSelectClick={this.setFilter}
                />
              );
            })}
          </div>
        }
      </div>
    );
  }

  private setFilter(option: IDropdownOption) {
    if (this.props.onChangeFilterCallback) {
      this.props.onChangeFilterCallback(option);
    }

    this.setState({
      showMenu: false
    });
  }

  private showHideMenuEvent(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    if (this.props.disabled) {
      return;
    }
    if (this.state.showMenu) {
      this.closeMenu()
    } else {
      this.showMenu();
    }
  }

  private showMenu() {
    this.setState({showMenu: true}, () => {
      document.addEventListener('click', this.onMouseEvent);
      document.addEventListener('keydown', this.onKeyboardEvent);
    });
  }

  private closeMenu() {
    this.setState({showMenu: false}, () => {
      document.removeEventListener('click', this.onMouseEvent);
      document.removeEventListener('keydown', this.onKeyboardEvent);
    });
  }

  private onMouseEvent(event: MouseEvent) {
    if (this.dropdownMenu && !this.dropdownMenu.contains(event.target as Node)) {
      this.closeMenu();
    }
  }

  private onKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      this.closeMenu();
    }
  }
}
