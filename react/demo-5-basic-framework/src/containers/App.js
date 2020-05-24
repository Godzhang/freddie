import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeReactReducer from "../reducers/HomeReactReducer";
import AboutReactReducer from "../reducers/AboutReactReducer";
import LoginReactReducer from "../reducers/LoginReactReducer";
import NavReactReducer from "../reducers/NavReactReducer";

class App extends Component {
  render() {
    return (
      <div>
        <NavReactReducer />
        <br />
        <Switch>
          <Route exact path="/" component={LoginReactReducer} />
          <Route exact path="/Home" component={HomeReactReducer} />
          <Route path="/About" component={AboutReactReducer} />
        </Switch>
      </div>
    );
  }
}

export default App;
