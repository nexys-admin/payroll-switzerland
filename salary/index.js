import React from "../_snowpack/pkg/react.js";
import * as U from "./utils.js";
import Table from "./table/index.js";
import * as F from "../components/form/index.js";
import * as Geo from "../geo/index.js";
import * as GT from "../geo/type.js";
import BaseSummary from "./base-summary.js";
import FormMonth from "./month/form.js";
export default () => {
  const [brut, setBrut] = React.useState("");
  const [lpp, setLpp] = React.useState("");
  const [canton, setCanton] = React.useState(GT.Canton.VD);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(F.Form, null, /* @__PURE__ */ React.createElement(F.Wrapper, {
    label: "Base"
  }, /* @__PURE__ */ React.createElement(F.Input.Number, {
    value: brut,
    onChange: setBrut
  })), /* @__PURE__ */ React.createElement(F.Wrapper, {
    label: "LPP Yearly"
  }, /* @__PURE__ */ React.createElement(F.Input.Number, {
    value: lpp,
    onChange: setLpp
  })), /* @__PURE__ */ React.createElement(F.Wrapper, {
    label: "Canton"
  }, /* @__PURE__ */ React.createElement(F.Select, {
    value: canton,
    options: Geo.cantonListOptionSet,
    onChange: setCanton
  }))), brut !== "" && /* @__PURE__ */ React.createElement(BaseSummary, {
    base: brut
  }), brut !== "" && lpp !== "" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Table, {
    lppYearly: lpp,
    base: brut,
    deductions: U.getDeductions(brut)
  }), /* @__PURE__ */ React.createElement("h3", null, "Monthly Reports"), /* @__PURE__ */ React.createElement(FormMonth, {
    lpp: lpp / 12,
    incomeGross: brut / 12
  })));
};
