import '@babel/polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from "./components/App";
import { store } from "./_shared/reducers/rootReducer";

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('react-container'),
);
