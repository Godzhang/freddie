import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "@/views/Home/Home";

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" key="home" component={Home}></Route>
          <Route path="/sub/:id" key="sub" component={Home}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default Router;
