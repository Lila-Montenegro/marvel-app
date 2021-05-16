import { Switch, Route, Redirect } from "react-router";
import React from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Characters from "./components/Characters";
import Movies from "./components/Movies";
import HQs from "./components/HQs";

export default (props) => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/chars" component={Home} />
    <Redirect from="*" to="/login" />
  </Switch>
);
