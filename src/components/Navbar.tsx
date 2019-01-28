import * as React from 'react';

export class Navbar extends React.PureComponent {

  public render(): JSX.Element {
    return (
      <div className="app__navbar navbar">
        <div className="navbar__header">
          Mobile <span className="navbar__header--light">Manager</span>
        </div>
      </div>
    );
  }
}
