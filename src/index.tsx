import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {rootReducer, RootState} from "./reducers/index";
import { Action } from "./actions/index";
import {devToolsEnhancer} from "redux-devtools-extension";

const store = createStore<RootState, Action, any, null>(rootReducer, devToolsEnhancer({"trace": true}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
