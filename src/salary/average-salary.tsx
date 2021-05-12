import React from "react";
import * as U from "./utils";

import * as GT from "../geo/type";
import * as Geo from "../geo";

const addressToGMapLink = (a: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(a)}`;

const AvgSalary = ({ canton }: { canton: GT.Canton }) => {
  const lines = Geo.avgSalary.filter((x) => x[1] === canton);

  if (lines.length === 0) {
    return (
      <div className={"alert alert-warning"}>
        Nothing found for canton {GT.Canton[canton]}
      </div>
    );
  }

  return (
    <table className={"table table-striped"}>
      <tbody>
        {lines.map((l, i) => (
          <tr key={i}>
            <td>
              {l[0]}{" "}
              <a href={addressToGMapLink(l[0])}>
                <i className={"fa fa-link"}></i>
              </a>
            </td>
            <td>{U.formatAmount(l[2])} CHF/mois</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AvgSalary;
