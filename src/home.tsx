import React from "react";
import Salary from "./salary";
import * as C from './config'

export default () => (
  <>
    <h1>Payroll Switzerland</h1>

    <Salary />

    <br/>
    <p>
      <a href={ghUrl}>
        <i className="fa fa-code"></i> Source
      </a>
      &nbsp;available under MIT license. Contributions are welcome.
    </p>

    <p>
      <small>
        <a href={C.ghUrlVersion}>{C.version}</a>
      </small>
    </p>
  </>
);
