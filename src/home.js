import React from "../_snowpack/pkg/react.js";
import Salary from "./salary/index.js";
import * as C from "./config.js";
const Footer = () => /* @__PURE__ */ React.createElement("footer", {
  class: "footer"
}, /* @__PURE__ */ React.createElement("div", {
  class: "container"
}, /* @__PURE__ */ React.createElement("span", {
  class: "text-muted"
}, " ", /* @__PURE__ */ React.createElement("a", {
  href: C.ghUrlVersion
}, C.version), " -  ", /* @__PURE__ */ React.createElement("a", {
  href: ghUrl
}, /* @__PURE__ */ React.createElement("i", {
  className: "fa fa-code"
}), " Source"), " available under MIT license. Contributions are welcome.")));
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Payroll Switzerland"), /* @__PURE__ */ React.createElement(Salary, null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Footer, null));
