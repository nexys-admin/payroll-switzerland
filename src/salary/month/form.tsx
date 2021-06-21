import React from "react";

import { Month, MonthData } from "./type";
import * as F from "../../components/form/index";
import DisplayMonth from "./display";

const monthList: { id: number; name: string }[] = Object.values(Month)
  .filter((x) => typeof x !== "string")
  .map((x) => {
    if (typeof x === "string") {
      throw Error("should not be here");
    } else {
      return { id: x, name: Month[x] };
    }
  });

const FormMonth = ({
  lpp,
  incomeGross,
}: {
  lpp: number;
  incomeGross: number;
}) => {
  const [form, setForm] = React.useState<MonthData>({
    year: 2021,
    month: new Date().getMonth(),
    firstName: "",
    lastName: "",
    company: "Nexys",
  });

  return (
    <>
      <F.Form>
        <F.Wrapper label={"Year"}>
          <F.Input.Number
            value={form.year}
            onChange={(year) => setForm({ ...form, year })}
          />
        </F.Wrapper>

        <F.Wrapper label="Month">
          <F.Select<Month>
            value={form.month}
            options={monthList}
            onChange={(month) => setForm({ ...form, month })}
          />
        </F.Wrapper>

        <F.Wrapper label={"First Name"}>
          <F.Input.Text
            value={form.firstName}
            onChange={(firstName) => setForm({ ...form, firstName })}
          />
        </F.Wrapper>

        <F.Wrapper label={"Last Name"}>
          <F.Input.Text
            value={form.lastName}
            onChange={(lastName) => setForm({ ...form, lastName })}
          />
        </F.Wrapper>

        <F.Wrapper label={"Company"}>
          <F.Input.Text
            value={form.company}
            onChange={(company) => setForm({ ...form, company })}
          />
        </F.Wrapper>
      </F.Form>

      {form.month > 0 &&
        form.firstName !== "" &&
        form.lastName !== "" &&
        form.company !== "" && (
          <DisplayMonth lpp={lpp} incomeGross={incomeGross} data={form} />
        )}
    </>
  );
};

export default FormMonth;
