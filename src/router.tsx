import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import AverageSalary from "./average-salary/index";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/average-salary"} component={AverageSalary} />
      <Route component={NotFound} />
    </Switch>
  );
};
