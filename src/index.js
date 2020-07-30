import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleWare from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { reducerSearchRobots, reducerRequestRobots } from "./reducers";

const reducerRoot = combineReducers({
  reducerSearchRobots,
  reducerRequestRobots,
});

const store = createStore(
  reducerRoot,
  applyMiddleware(thunkMiddleWare, createLogger())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
