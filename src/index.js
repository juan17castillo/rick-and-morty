import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import App from "./App";
import thunk from "redux-thunk";

import { reducers } from "./reducers";
/**
 * To allow React Redux Dev Tools
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/**
 * Creates a only one Redux store that holds the complete state tree of the app.
 */
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
/**
 * Main wrapper by React's strict mode, then the redux provider for the application joined with the store property created earlier.
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
