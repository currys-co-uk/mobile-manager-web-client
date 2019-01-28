import * as React from 'react';
import * as classNames from 'classnames';
import {NavLink} from "react-router-dom";

export interface IPanelTab {
  tabName: string;
  tabUrl: string;
}

interface IPanelWithTabProps {
  caption: string;
  tabs: IPanelTab[];
  currentTab: string;
  currentUrl: string;
}

export class PanelWithTabs extends React.PureComponent<IPanelWithTabProps> {

  public render(): JSX.Element {
    return (
      <div className="panel">
        <div className="panel__heading">
          <div className="panel__heading-title">
            {this.props.caption}
          </div>
          <div className="panel__tabs">
            {this.props.tabs &&
            this.props.tabs.map((tab, index) => {
              return (
                <div
                  key={index}
                  className={classNames("panel__tab", {'panel__tab--active': this.props.currentTab === tab.tabUrl})}
                >
                  <NavLink
                    to={this.props.currentUrl + '/' + tab.tabUrl}
                    className="panel__tab-link"
                  >
                    {tab.tabName}
                  </NavLink>
                </div>
              )
            })
            }
          </div>
        </div>
        <div className="panel__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
