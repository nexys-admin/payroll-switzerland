import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />

      <Route component={NotFound} />
    </Switch>
  );
};
