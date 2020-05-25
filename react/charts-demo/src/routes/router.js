import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import ChartType from "../pages/ChartType/ChartType";
import ChartDetail from "../pages/ChartDetail/ChartDetail";

const Repos = () => <div>Repos component</div>;
const About = () => <div>About component</div>;

const router = () => (
  <Switch>
    <Route exact path="/" component={Home}>
      {/* <Route path="/repos" component={Repos} />
      <Route path="/about" component={About} /> */}
    </Route>
    <Route exact path="/chartType" component={ChartType}></Route>
    <Route exact path="/chartDetail" component={ChartDetail}></Route>
  </Switch>
);

export default router;
