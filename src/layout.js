import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';

import React from "../_snowpack/pkg/react.js";
import {Link, BrowserRouter as Router} from "../_snowpack/pkg/react-router-dom.js";
const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL;
const style = {
  borderTop: "1px solid #e5e5e5",
  borderBottom: "1px solid #e5e5e5",
  boxShadow: "0 .25rem .75rem rgba(0, 0, 0, .05)"
};
const title = "Payroll Switzerland";
const menus = [];
function Layout({children}) {
  const header = /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    style,
    className: "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "my-0 mr-md-auto font-weight-normal"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, title)), /* @__PURE__ */ React.createElement("nav", {
    className: "my-2 my-md-0 mr-md-3"
  }, menus.map((menu, i) => /* @__PURE__ */ React.createElement(Link, {
    className: "p-2 text-dark",
    key: i,
    to: menu.link
  }, menu.name)))));
  return /* @__PURE__ */ React.createElement(Router, {
    basename
  }, header, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, children));
}
export default Layout;
