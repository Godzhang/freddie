import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducerCalculator from "./reducers/reducerCalculator";
import { App } from "./containers/App";

const root = document.getElementById("root");

const store = createStore(reducerCalculator);

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );

render();

store.subscribe(render);
