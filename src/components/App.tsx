import * as React from 'react';
import { BrowserRouter } from "react-router-dom";
import { AppWrapper } from "../_shared/containers/AppWrapper";
import { Menubar } from "./Menubar";
import { Navbar } from "./Navbar";
import { LoadingIndicator } from "../_shared/containers/LoadingIndicator";

export class App extends React.PureComponent {


  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <div className="app">
            <Navbar/>
          <div className="app__view">
            <Menubar />
            <AppWrapper/>
            <LoadingIndicator />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
