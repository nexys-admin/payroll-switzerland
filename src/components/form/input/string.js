import React from "../../../../_snowpack/pkg/react.js";
export const Input = ({
  value,
  onChange
}) => /* @__PURE__ */ React.createElement("input", {
  className: "form-control",
  type: "text",
  value,
  onChange: (v) => onChange(v.target.value)
});
export default Input;
