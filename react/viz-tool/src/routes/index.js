import React from "react";
import { Router, Route, Link, HashRouter, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Demo from "../pages/Demo/Demo";
import ChartTemplates from "../pages/ChartTemplates/ChartTemplates";
import ChartDetail from "../pages/ChartDetail/ChartDetail";

class IndexRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/demo" component={Demo}></Route>
          <Route exact path="/templates" component={ChartTemplates}></Route>
          <Route exact path="/detail/:type" component={ChartDetail}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default IndexRouter;
