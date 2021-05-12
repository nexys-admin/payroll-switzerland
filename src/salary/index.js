import React from "../../_snowpack/pkg/react.js";
import * as U from "./utils.js";
import Table from "./table/index.js";
import * as F from "../components/form/index.js";
import * as Geo from "../geo/index.js";
import * as GT from "../geo/type.js";
import * as Municipality from "../geo/municipality.js";
import AverageSalary from "./average-salary.js";
export default () => {
  const [brut, setBrut] = React.useState("");
  const [lpp, setLpp] = React.useState("");
  const [canton, setCanton] = React.useState(GT.Canton.VD);
  Municipality.get().then((x) => console.log(x));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(F.Form, null, /* @__PURE__ */ React.createElement(F.Wrapper, {
    label: "Base"
  }, /* @__PURE__ */ React.createElement(F.Input.Number, {
    value: brut,
    onChange: setBrut
  }), brut && /* @__PURE__ */ React.createElement("span", null, U.formatAmount(brut / 12), "/mois")), /* @__PURE__ */ React.createElement(F.Wrapper, {
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
  }))), brut !== "" && lpp !== "" && /* @__PURE__ */ React.createElement(Table, {
    lppYearly: lpp,
    base: brut,
    deductions: U.getDeductions(brut)
  }), canton && /* @__PURE__ */ React.createElement(AverageSalary, {
    canton
  }));
};
