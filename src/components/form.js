import React from "../../_snowpack/pkg/react.js";
export const InputNumber = ({
  value,
  onChange
}) => /* @__PURE__ */ React.createElement("input", {
  className: "form-control",
  type: "number",
  value,
  onChange: (v) => onChange(Number(v.target.value))
});
export const Wrapper = ({
  label,
  children
}) => /* @__PURE__ */ React.createElement("div", {
  className: "col-auto"
}, /* @__PURE__ */ React.createElement("label", {
  className: "mr-sm-2"
}, label), children);
export const Form = ({children}) => /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", {
  className: "form-row align-items-center"
}, children));
