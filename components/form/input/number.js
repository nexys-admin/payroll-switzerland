import React from "../../../_snowpack/pkg/react.js";
export const InputNumber = ({
  value,
  onChange
}) => /* @__PURE__ */ React.createElement("input", {
  className: "form-control",
  type: "number",
  value,
  onChange: (v) => onChange(Number(v.target.value))
});
export default InputNumber;
