import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducerCounter from "./reducers/reducerCounter";
import CounterComp from "./components/CounterComp";

const root = document.getElementById("root");

const store = createStore(reducerCounter);

const render = () =>
  ReactDOM.render(
    <CounterComp value={store.getState()} vstore={store} />,
    root
  );

render();

store.subscribe(render);
