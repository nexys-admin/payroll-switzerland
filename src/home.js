import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';

import React from "../_snowpack/pkg/react.js";
import Salary from "./salary/index.js";
const ghUrl = "https://github.com/nexys-admin/payroll-switzerland";
const version = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_VERSION || "unset_version";
const ghUrlVersion = `${ghUrl}/releases/tag/${version}`;
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Payroll Switzerland"), /* @__PURE__ */ React.createElement(Salary, null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
  href: ghUrl
}, /* @__PURE__ */ React.createElement("i", {
  className: "fa fa-code"
}), " Source"), " available under MIT license. Contributions are welcome."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement("a", {
  href: ghUrlVersion
}, version))));
