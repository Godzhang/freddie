import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../views/Home/index";

export default class RouteConfig extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    );
  }
}
