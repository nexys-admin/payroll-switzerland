import React from "react";
import Salary from "./salary";
const ghUrl = "https://github.com/nexys-admin/payroll-switzerland";

// const sha = import.meta.env.SNOWPACK_PUBLIC_GIT_SHA || "unset_sha";
// const ghUrlSha = `${ghUrl}/commit/${sha}`;

const version = import.meta.env.SNOWPACK_PUBLIC_VERSION || "unset_version";
const ghUrlVersion= `${ghUrl}/releases/tag/${version}`;

export default () => (
  <>
    <h1>Payroll Switzerland</h1>

    <Salary />

    <p>
      <a href={ghUrl}>
        <i className="fa fa-code"></i> Source
      </a>
      &nbsp;available under MIT license. Contributions are welcome.
    </p>

    <p>
      <small>
        <a href={ghUrlVersion}>{version}</a>
      </small>
    </p>
  </>
);
