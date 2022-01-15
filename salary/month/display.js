import React from "../../_snowpack/pkg/react.js";
import * as U from "../../lib/salary/utils.js";
import {SalaryType} from "../../lib/salary/export/type.js";
import * as PDFExport from "../export/index.js";
import {Month} from "./type.js";
const DisplayMonth = ({
  data,
  lpp,
  incomeGross
}) => {
  const start = new Date(data.year, data.month - 1, 1);
  const end = new Date(new Date(data.year, data.month, 1).getTime() - 1e3 * 3600 * 24);
  const month = Month[data.month];
  const dateStart = [start.getDate(), data.month, data.year].join("-");
  const dateEnd = [end.getDate(), data.month, data.year].join("-");
  const handleExport = () => {
    const user = {
      id: 1,
      firstName: data.firstName,
      lastName: data.lastName
    };
    const contributions = U.getDeductionsFicheSalaire(incomeGross, lpp);
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
      type: SalaryType.Monthly
    });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", null, data.firstName, " ", data.lastName), /* @__PURE__ */ React.createElement("p", null, "Du ", start.getDate(), " ", month, " au ", end.getDate(), " ", month, " ", data.year), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleExport
  }, "Export"));
};
export default DisplayMonth;
