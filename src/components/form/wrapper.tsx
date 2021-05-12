import React from "react";

export const Wrapper = ({
  label,
  children,
}: {
  label: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <div className="col-auto">
    <label className="mr-sm-2">{label}</label>
    {children}
  </div>
);

export default Wrapper;
