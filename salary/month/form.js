import React from "../../_snowpack/pkg/react.js";
import {Month} from "./type.js";
import * as F from "../../components/form/index.js";
import DisplayMonth from "./display.js";
const monthList = Object.values(Month).filter((x) => typeof x !== "string").map((x) => {
  if (typeof x === "string") {
    throw Error("should not be here");
  } else {
    return {id: x, name: Month[x]};
  }
});
const FormMonth = ({
  lpp,
  incomeGross
}) => {
  const [form, setForm] = React.useState({
    year: 2021,
    month: new Date().getMonth(),
    firstName: "",
    lastName: "",
    company: "Nexys"
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
    label: "First Name"
  }, /* @__PURE__ */ React.createElement(F.Input.Text, {
    value: form.firstName,
    onChange: (firstName) => setForm({...form, firstName})
  })), /* @__PURE__ */ React.createElement(F.Wrapper, {
    label: "Last Name"
  }, /* @__PURE__ */ React.createElement(F.Input.Text, {
    value: form.lastName,
    onChange: (lastName) => setForm({...form, lastName})
  })), /* @__PURE__ */ React.createElement(F.Wrapper, {
    label: "Company"
  }, /* @__PURE__ */ React.createElement(F.Input.Text, {
    value: form.company,
    onChange: (company) => setForm({...form, company})
  }))), form.month > 0 && form.firstName !== "" && form.lastName !== "" && form.company !== "" && /* @__PURE__ */ React.createElement(DisplayMonth, {
    lpp,
    incomeGross,
    data: form
  }));
};
export default FormMonth;
