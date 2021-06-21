import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import AverageSalary from "./average-salary/index";
import Links from "./links";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => {
  return (
    <Switch>
      <Route exact path={Links.calculator.link} component={Home} />
      <Route exact path={Links.average.link} component={AverageSalary} />
      <Route component={NotFound} />
    </Switch>
  );
};
