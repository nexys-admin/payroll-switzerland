import React from "react";

export const Form = ({ children }: { children: JSX.Element[] }) => (
  <form>
    <div className="form-row align-items-center">{children}</div>
  </form>
);

export default Form;
