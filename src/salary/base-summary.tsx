import React from "react";

import * as U from "../lib/salary/utils";

const BaseSummary = ({ base }: { base: number }) => {
  return (
    <table className={"table"}>
      <tbody>
        <tr>
          <td>{U.formatAmount(base)} CHF/année</td>
        </tr>
        <tr>
          <td>{U.formatAmount(base / 12)} CHF/mois</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BaseSummary;
