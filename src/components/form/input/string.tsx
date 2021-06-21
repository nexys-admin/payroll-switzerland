import React from "react";

export const Input = ({
  value,
  onChange,
}: {
  value: string | "";
  onChange: (v: string) => void;
}) => (
  <input
    className="form-control"
    type="text"
    value={value}
    onChange={(v) => onChange(v.target.value)}
  />
);

export default Input;
