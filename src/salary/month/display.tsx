import React from "react";

import * as U from "../../lib/salary";
import { Contribution, SalaryType } from "../export/type";
import * as PDFExport from "../export";

import { Month, MonthData } from "./type";

const DisplayMonth = ({
  data,
  lpp,
  incomeGross,
}: {
  data: MonthData;
  lpp: number;
  incomeGross: number;
}) => {
  const start = new Date(data.year, data.month - 1, 1);
  const end = new Date(
    new Date(data.year, data.month, 1).getTime() - 1000 * 3600 * 24
  );

  const month = Month[data.month];
  const dateStart = [start.getDate(), data.month, data.year].join("-");
  const dateEnd = [end.getDate(), data.month, data.year].join("-");

  const handleExport = () => {
    const user = {
      id: 1,
      firstName: data.firstName,
      lastName: data.lastName,
    };
    const contributions: Contribution[] = U.getDeductionsFicheSalaire(
      incomeGross,
      lpp
    );

    const incomeNet = U.toIncomeNet(incomeGross, contributions);

    PDFExport.downloadPdf({
      company: data.company,
      contributions,
      dateStart,
      dateEnd,
      dateAdded: new Date(),
      incomeGross,
      incomeNet,
      user,
      type: SalaryType.Monthly,
    });
  };

  return (
    <>
      <h3>
        {data.firstName} {data.lastName}
      </h3>
      <p>
        Du {start.getDate()} {month} au {end.getDate()} {month} {data.year}
      </p>
      <button className={"btn btn-primary"} onClick={handleExport}>
        Export
      </button>
    </>
  );
};

export default DisplayMonth;
