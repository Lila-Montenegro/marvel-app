import { Switch, Route, Redirect } from "react-router";
import React from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/home" component={Home} />
    <Redirect from="*" to="/login" />
  </Switch>
);

export default Routes;
