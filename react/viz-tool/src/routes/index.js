import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Demo from "../pages/Demo/Demo";
import ChartTemplates from "../pages/ChartTemplates/ChartTemplates";
import ChartDetail from "../pages/ChartDetail/ChartDetail";
import ChartPreview from "../pages/ChartPreview/ChartPreview";

class IndexRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/demo" component={Demo}></Route>
          <Route exact path="/templates" component={ChartTemplates}></Route>
          <Route
            exact
            path="/detail/:type/:name"
            component={ChartDetail}
          ></Route>
          <Route
            exact
            path="/preview/:type/:name"
            component={ChartPreview}
          ></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default IndexRouter;
