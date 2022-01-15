import React from "react";

import * as U from "../../lib/salary";
import * as T from "../type";

const AVSGroup = [
  T.DeductionType.AVS,
  T.DeductionType.AC1,
  T.DeductionType.AC2,
];

const TableRowDeduction = ({ d }: { d: T.DeductionWAmount }) => (
  <tr>
    <td>{d.gs}</td>
    <td>
      {d.label} {T.DeductionType[d.type]}{" "}
      <i className={"fa fa-info-circle"} style={{ color: "#007bff" }}></i>
    </td>
    <td style={{ textAlign: "right" }}>{U.formatAmount(d.amount.employee)}</td>
    <td style={{ textAlign: "right" }}>{U.formatRate(d.rate.employee)}</td>
    <td style={{ textAlign: "right" }}>{U.formatAmount(d.amount.employer)}</td>
    <td style={{ textAlign: "right" }}>{U.formatRate(d.rate.employer)}</td>
  </tr>
);

const Table = ({
  base,
  lppYearly,
  deductions,
}: {
  base: number;
  lppYearly: number;
  deductions: T.DeductionWAmount[];
}): JSX.Element => {
  const avsDeductions = deductions.filter((x) => AVSGroup.includes(x.type));
  const nonAvsDeductions = deductions.filter((x) => !AVSGroup.includes(x.type));
  const avsTotal = U.sumDeduction(avsDeductions);
  //const nonAvsTotal = U.sumDeduction(nonAvsDeductions);
  const net = base - (avsTotal + lppYearly);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>GS</th>
          <th>Label</th>
          <th colSpan={2} style={{ textAlign: "center" }}>
            Employee
          </th>
          <th colSpan={2} style={{ textAlign: "center" }}>
            Employer
          </th>
        </tr>
      </thead>
      <tbody>
        <TotalRow label={"Base"} amount={base} gs={5000} key={0} />
        {avsDeductions.map((d, i) => (
          <TableRowDeduction key={100 + i} d={d} />
        ))}

        <TotalRow label={"AVS Group"} amount={avsTotal} key={1} />
        <TableRowDeduction
          d={{
            gs: 0,
            label: "LPP",
            type: T.DeductionType.LPP,
            rate: { employee: 100 * (lppYearly / base) },
            amount: { employee: lppYearly },
          }}
          key={2}
        />
        {nonAvsDeductions.map((d, i) => (
          <TableRowDeduction d={d} key={200 + i} />
        ))}

        <TotalRow label={"Net"} amount={net} key={3} />
      </tbody>
    </table>
  );
};

const TotalRow = ({
  gs,
  label,
  amount,
}: {
  gs?: number;
  label: string;
  amount: number;
}) => (
  <tr>
    <th>{gs}</th>
    <th>{label}</th>
    <th style={{ textAlign: "right" }}>{U.formatAmount(amount)}</th>
    <th colSpan={3} />
  </tr>
);

export default Table;
