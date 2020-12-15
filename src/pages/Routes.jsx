import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import About from "./About";
import PolicyHolders from "./PolicyHolders";
import InsuredEvents from "./InsuredEvents";
import Analysis from "./Analysis";
import history from "../shared/utils/history";

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/policyholders" component={PolicyHolders} />
          <Route exact path="/insuredevents" component={InsuredEvents} />
          <Route exact path="/analysis" component={Analysis} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;