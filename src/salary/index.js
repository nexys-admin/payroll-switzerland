import React from "../../_snowpack/pkg/react.js";
import * as U from "./utils.js";
import Table from "./table/index.js";
import * as F from "../components/form/index.js";
import * as Geo from "../geo/index.js";
import * as GT from "../geo/type.js";
import * as Municipality from "../geo/municipality.js";
import BaseSummary from "./base-summary.js";
var Month;
(function(Month2) {
  Month2[Month2["January"] = 1] = "January";
  Month2[Month2["February"] = 2] = "February";
  Month2[Month2["March"] = 3] = "March";
  Month2[Month2["April"] = 4] = "April";
  Month2[Month2["May"] = 5] = "May";
  Month2[Month2["June"] = 6] = "June";
  Month2[Month2["July"] = 7] = "July";
  Month2[Month2["August"] = 8] = "August";
  Month2[Month2["September"] = 9] = "September";
  Month2[Month2["October"] = 10] = "October";
  Month2[Month2["November"] = 11] = "November";
  Month2[Month2["December"] = 12] = "December";
})(Month || (Month = {}));
const monthList = Object.values(Month).filter((x) => typeof x !== "string").map((x) => {
  if (typeof x === "string") {
    throw Error("should not be here");
  } else {
    return {id: x, name: Month[x]};
  }
});
const FormMonth = () => {
  const [form, setForm] = React.useState({
    year: 2021,
    month: 1,
    name: "Johan"
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(F.Form, null, /* @__PURE__ */ React.createElement(F.Wrapper, {
    label: "Year"
  }, /* @__PURE__ */ React.createElement(F.Input.Number, {
    value: form.year,
    onChange: (year) => setForm({...form, year})
  })), /* @__PURE__ */ React.createElement(F.Wrapper, {
    label: "Month"
  }, /* @__PURE__ */ React.createElement(F.Select, {
    value: form.month,
    options: monthList,
    onChange: (month) => setForm({...form, month})
  })), /* @__PURE__ */ React.createElement(F.Wrapper, {
    label: "Name"
  }, /* @__PURE__ */ React.createElement(F.Input.Text, {
    value: form.name,
    onChange: (name) => setForm({...form, name})
  }))), form.month > 0 && form.name !== "" && /* @__PURE__ */ React.createElement(DisplayMonth, {
    data: form
  }));
};
const DisplayMonth = ({data}) => {
  const start = new Date(data.year, data.month - 1, 1);
  const end = new Date(new Date(data.year, data.month, 1).getTime() - 1e3 * 3600 * 24);
  const month = Month[data.month];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", null, data.name), /* @__PURE__ */ React.createElement("p", null, "Du ", start.getDate(), " ", month, " au ", end.getDate(), " ", month, " ", data.year));
};
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
  }), brut !== "" && lpp !== "" && /* @__PURE__ */ React.createElement(Table, {
    lppYearly: lpp,
    base: brut,
    deductions: U.getDeductions(brut)
  }), /* @__PURE__ */ React.createElement(FormMonth, null));
};
