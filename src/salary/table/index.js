import React from "../../../_snowpack/pkg/react.js";
import * as U from "../utils.js";
import * as T from "../type.js";
const AVSGroup = [
  T.DeductionType.AVS,
  T.DeductionType.AC1,
  T.DeductionType.AC2
];
const TableRowDeduction = ({d}) => /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, d.gs), /* @__PURE__ */ React.createElement("td", null, d.label, " ", T.DeductionType[d.type]), /* @__PURE__ */ React.createElement("td", {
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
  const nonAvsTotal = U.sumDeduction(nonAvsDeductions);
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
    gs: 5e3
  }), avsDeductions.map((d) => /* @__PURE__ */ React.createElement(TableRowDeduction, {
    d
  })), /* @__PURE__ */ React.createElement(TotalRow, {
    label: "AVS Group",
    amount: avsTotal
  }), /* @__PURE__ */ React.createElement(TableRowDeduction, {
    d: {
      gs: 0,
      label: "LPP",
      type: T.DeductionType.LPP,
      rate: {employee: 100 * (lppYearly / base)},
      amount: {employee: lppYearly}
    }
  }), nonAvsDeductions.map((d) => /* @__PURE__ */ React.createElement(TableRowDeduction, {
    d
  })), /* @__PURE__ */ React.createElement(TotalRow, {
    label: "Net",
    amount: net
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
