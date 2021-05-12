import React from "react";
import * as U from "./utils";

import * as Geo from "../geo";

const addressToGMapLink = (a: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(a)}`;

const AvgSalary = ({ canton }: { canton: Geo.Canton }) => {
  const lines = Geo.avgSalary.filter((x) => x[1] === canton);

  if (lines.length === 0) {
    return (
      <div className={"alert alert-warning"}>
        Nothing found for canton {Geo.Canton[canton]}
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
