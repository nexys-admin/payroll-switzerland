import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';

import React from "../../_snowpack/pkg/react.js";
import {BrowserRouter as Router} from "../../_snowpack/pkg/react-router-dom.js";
import Footer from "./footer.js";
import Header from "./header.js";
const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL;
const Layout = ({children}) => {
  return /* @__PURE__ */ React.createElement(Router, {
    basename
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, children), /* @__PURE__ */ React.createElement(Footer, null));
};
export default Layout;
