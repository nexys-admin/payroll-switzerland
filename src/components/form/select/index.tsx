import React from "react";

const getValue = <A extends number | string>(
  v: string | undefined
): A | undefined => {
  if (v === "" || v === undefined) {
    return undefined;
  }

  const vn = Number(v);
  if (isNaN(vn)) {
    return v as A;
  }

  return vn as A;
};

export const Select = <A extends number | string>({
  options,
  value,
  onChange = (v) =>
    console.log(`onChange not yet implemented, selected value: ${v}`),
}: {
  options: { id: A; name: string }[];
  value?: A | undefined;
  onChange?: (value: A | undefined) => void;
}) => (
  <select
    defaultValue={value}
    className="form-control"
    onChange={(v) => onChange(getValue(v.target.value))}
  >
    <option value={""}></option>
    {options.map(({ id, name }, i) => (
      <option key={i} value={id}>
        {name}
      </option>
    ))}
  </select>
);

export default Select;
