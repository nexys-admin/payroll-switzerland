import React from "../../_snowpack/pkg/react.js";
import * as U from "../salary/utils.js";
import * as GT from "../geo/type.js";
import * as Geo from "../geo/index.js";
const addressToGMapLink = (a) => `https://www.google.com/maps?q=${encodeURIComponent(a)}`;
const AvgSalary = ({canton}) => {
  const lines = Geo.avgSalary.filter((x) => x[1] === canton);
  if (lines.length === 0) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "alert alert-warning"
    }, "Nothing found for canton ", GT.Canton[canton]);
  }
  return /* @__PURE__ */ React.createElement("table", {
    className: "table table-striped"
  }, /* @__PURE__ */ React.createElement("tbody", null, lines.map((l, i) => /* @__PURE__ */ React.createElement("tr", {
    key: i
  }, /* @__PURE__ */ React.createElement("td", null, l[0], " ", /* @__PURE__ */ React.createElement("a", {
    href: addressToGMapLink(l[0])
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-link"
  }))), /* @__PURE__ */ React.createElement("td", null, U.formatAmount(l[2]), " CHF/mois")))));
};
export default ({canton}) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Average Salary"), /* @__PURE__ */ React.createElement(AvgSalary, {
  canton
}));
