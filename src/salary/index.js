import React from "../../_snowpack/pkg/react.js";
import * as U from "./utils.js";
import Table from "./table/index.js";
import * as F from "../components/form.js";
export default () => {
  const [brut, setBrut] = React.useState("");
  const [lpp, setLpp] = React.useState("");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(F.Form, null, /* @__PURE__ */ React.createElement(F.Wrapper, {
    label: "Base"
  }, /* @__PURE__ */ React.createElement(F.InputNumber, {
    value: brut,
    onChange: setBrut
  }), brut && U.formatAmount(brut / 12)), /* @__PURE__ */ React.createElement(F.Wrapper, {
    label: "LPP Yearly"
  }, /* @__PURE__ */ React.createElement(F.InputNumber, {
    value: lpp,
    onChange: setLpp
  }))), brut !== "" && lpp !== "" && /* @__PURE__ */ React.createElement(Table, {
    lppYearly: lpp,
    base: brut,
    deductions: U.getDeductions(brut)
  }));
};
