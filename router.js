import React from "./_snowpack/pkg/react.js";
import {Route, Switch} from "./_snowpack/pkg/react-router-dom.js";
import Home from "./home.js";
import AverageSalary from "./average-salary/index.js";
import Links from "./links.js";
const NotFound = () => /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "Page Not Found"));
export default () => {
  return /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: Links.calculator.link,
    component: Home
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: Links.average.link,
    component: AverageSalary
  }), /* @__PURE__ */ React.createElement(Route, {
    component: NotFound
  }));
};
