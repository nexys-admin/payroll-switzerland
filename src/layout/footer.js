import React from "../../_snowpack/pkg/react.js";
import * as C from "../config.js";
const Footer = () => /* @__PURE__ */ React.createElement("footer", {
  class: "footer"
}, /* @__PURE__ */ React.createElement("div", {
  class: "container"
}, /* @__PURE__ */ React.createElement("span", {
  class: "text-muted"
}, " ", /* @__PURE__ */ React.createElement("a", {
  href: C.ghUrlVersion
}, C.version), " -  ", /* @__PURE__ */ React.createElement("a", {
  href: C.ghUrl
}, /* @__PURE__ */ React.createElement("i", {
  className: "fa fa-code"
}), " Source"), " available under MIT license. Contributions are welcome.")));
export default Footer;
