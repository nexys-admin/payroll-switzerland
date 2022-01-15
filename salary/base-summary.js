import React from "../_snowpack/pkg/react.js";
import * as U from "../lib/salary/utils.js";
const BaseSummary = ({base}) => {
  return /* @__PURE__ */ React.createElement("table", {
    className: "table"
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, U.formatAmount(base), " CHF/année")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, U.formatAmount(base / 12), " CHF/mois"))));
};
export default BaseSummary;
