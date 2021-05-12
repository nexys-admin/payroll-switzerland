import React from "react";

export const InputNumber = ({
  value,
  onChange,
}: {
  value: number | "";
  onChange: (v: number) => void;
}) => (
  <input
    className="form-control"
    type="number"
    value={value}
    onChange={(v) => onChange(Number(v.target.value))}
  />
);

export default InputNumber;
