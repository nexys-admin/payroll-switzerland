import React from "../../_snowpack/pkg/react.js";
import * as U from "../../lib/salary/utils.js";
import * as T from "../../lib/salary/type.js";
const AVSGroup = [
  T.DeductionType.AVS,
  T.DeductionType.AC1,
  T.DeductionType.AC2
];
const TableRowDeduction = ({d}) => /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, d.gs), /* @__PURE__ */ React.createElement("td", null, d.label, " ", T.DeductionType[d.type], " ", /* @__PURE__ */ React.createElement("i", {
  className: "fa fa-info-circle",
  style: {color: "#007bff"}
})), /* @__PURE__ */ React.createElement("td", {
  style: {textAlign: "right"}
}, U.formatAmount(d.amount.employee)), /* @__PURE__ */ React.createElement("td", {
  style: {textAlign: "right"}
}, U.formatRate(d.rate.employee)), /* @__PURE__ */ React.createElement("td", {
  style: {textAlign: "right"}
}, U.formatAmount(d.amount.employer)), /* @__PURE__ */ React.createElement("td", {
  style: {textAlign: "right"}
}, U.formatRate(d.rate.employer)));
const Table = ({
  base,
  lppYearly,
  deductions
}) => {
  const avsDeductions = deductions.filter((x) => AVSGroup.includes(x.type));
  const nonAvsDeductions = deductions.filter((x) => !AVSGroup.includes(x.type));
  const avsTotal = U.sumDeduction(avsDeductions);
  const net = base - (avsTotal + lppYearly);
  return /* @__PURE__ */ React.createElement("table", {
    className: "table table-striped"
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "GS"), /* @__PURE__ */ React.createElement("th", null, "Label"), /* @__PURE__ */ React.createElement("th", {
    colSpan: 2,
    style: {textAlign: "center"}
  }, "Employee"), /* @__PURE__ */ React.createElement("th", {
    colSpan: 2,
    style: {textAlign: "center"}
  }, "Employer"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement(TotalRow, {
    label: "Base",
    amount: base,
    gs: 5e3,
    key: 0
  }), avsDeductions.map((d, i) => /* @__PURE__ */ React.createElement(TableRowDeduction, {
    key: 100 + i,
    d
  })), /* @__PURE__ */ React.createElement(TotalRow, {
    label: "AVS Group",
    amount: avsTotal,
    key: 1
  }), /* @__PURE__ */ React.createElement(TableRowDeduction, {
    d: {
      gs: 0,
      label: "LPP",
      type: T.DeductionType.LPP,
      rate: {employee: 100 * (lppYearly / base)},
      amount: {employee: lppYearly}
    },
    key: 2
  }), nonAvsDeductions.map((d, i) => /* @__PURE__ */ React.createElement(TableRowDeduction, {
    d,
    key: 200 + i
  })), /* @__PURE__ */ React.createElement(TotalRow, {
    label: "Net",
    amount: net,
    key: 3
  })));
};
const TotalRow = ({
  gs,
  label,
  amount
}) => /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, gs), /* @__PURE__ */ React.createElement("th", null, label), /* @__PURE__ */ React.createElement("th", {
  style: {textAlign: "right"}
}, U.formatAmount(amount)), /* @__PURE__ */ React.createElement("th", {
  colSpan: 3
}));
export default Table;
