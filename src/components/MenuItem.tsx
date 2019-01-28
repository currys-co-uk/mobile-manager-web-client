import * as classNames from 'classnames';
import * as React from "react";
import { NavLink } from 'react-router-dom';

interface IMenuItemProps {
  title: string;
  icon: string;
  routeLink: string;
}

export class MenuItem extends React.PureComponent<IMenuItemProps> {

  public render(): JSX.Element {
    return (
      this.props.routeLink.startsWith('http') ? this.renderExternalLink() : this.renderInternalLink()
    );
  }

  private renderInternalLink() {
    return <NavLink
      to={this.props.routeLink}
      className={'menu__item'}
      activeClassName={'menu__item--active'}
    >
      <div className="menu__item-icon">
        <i className={classNames('glyphicon', this.props.icon)}/>
      </div>
      <span className="menu__item-title">
          {this.props.title}
        </span>
    </NavLink>;
  }

  private renderExternalLink() {
    return <a
      target="_blank"
      href={this.props.routeLink}
      className={'menu__item'}
    >
      <div className="menu__item-icon">
        <i className={classNames('glyphicon', this.props.icon)}/>
      </div>
      <span className="menu__item-title">
          {this.props.title}
        </span>
    </a>;
  }
}
