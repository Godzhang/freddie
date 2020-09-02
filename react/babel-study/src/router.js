import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "pages/Home/home";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch>
  </HashRouter>
);

export default BasicRoute;
