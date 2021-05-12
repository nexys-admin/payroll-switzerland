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

export const Wrapper = ({
  label,
  children,
}: {
  label: string;
  children: JSX.Element;
}) => (
  <div className="col-auto">
    <label className="mr-sm-2">{label}</label>
    {children}
  </div>
);

export const Form = ({ children }: { children: JSX.Element[] }) => (
  <form>
    <div className="form-row align-items-center">{children}</div>
  </form>
);
