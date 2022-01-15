import React from "../../../_snowpack/pkg/react.js";
const getValue = (v) => {
  if (v === "" || v === void 0) {
    return void 0;
  }
  const vn = Number(v);
  if (isNaN(vn)) {
    return v;
  }
  return vn;
};
export const Select = ({
  options,
  value,
  onChange = (v) => console.log(`onChange not yet implemented, selected value: ${v}`)
}) => /* @__PURE__ */ React.createElement("select", {
  defaultValue: value,
  className: "form-control",
  onChange: (v) => onChange(getValue(v.target.value))
}, /* @__PURE__ */ React.createElement("option", {
  value: ""
}), options.map(({id, name}, i) => /* @__PURE__ */ React.createElement("option", {
  key: i,
  value: id
}, name)));
export default Select;
