import React from "react";
import * as U from "./utils";

import Table from "./table";

import * as F from "../components/form/index";
import * as Geo from "../geo";
import * as GT from "../geo/type";
import * as Municipality from "../geo/municipality";

import BaseSummary from "./base-summary";

enum Month {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12,
}

const monthList: { id: number; name: string }[] = Object.values(Month)
  .filter((x) => typeof x !== "string")
  .map((x) => {
    if (typeof x === "string") {
      throw Error("should not be here");
    } else {
      return { id: x, name: Month[x] };
    }
  });

interface MonthData {
  year: number;
  month: Month;
  name: string;
}

const FormMonth = () => {
  const [form, setForm] = React.useState<MonthData>({
    year: 2021,
    month: 1, //0,
    name: "Johan",
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

        <F.Wrapper label={"Name"}>
          <F.Input.Text
            value={form.name}
            onChange={(name) => setForm({ ...form, name })}
          />
        </F.Wrapper>
      </F.Form>

      {form.month > 0 && form.name !== "" && <DisplayMonth data={form} />}
    </>
  );
};

const DisplayMonth = ({ data }: { data: MonthData }) => {
  const start = new Date(data.year, data.month - 1, 1);
  const end = new Date(
    new Date(data.year, data.month, 1).getTime() - 1000 * 3600 * 24
  );

  const month = Month[data.month];
  return (
    <>
      <h3>{data.name}</h3>
      <p>
        Du {start.getDate()} {month} au {end.getDate()} {month} {data.year}
      </p>
    </>
  );
};

export default (): JSX.Element => {
  const [brut, setBrut] = React.useState<number | "">("");
  const [lpp, setLpp] = React.useState<number | "">("");
  const [canton, setCanton] = React.useState<GT.Canton | undefined>(
    GT.Canton.VD
  );

  Municipality.get().then((x) => console.log(x));

  return (
    <>
      <F.Form>
        <F.Wrapper label={"Base"}>
          <F.Input.Number value={brut} onChange={setBrut} />
        </F.Wrapper>
        <F.Wrapper label={"LPP Yearly"}>
          <F.Input.Number value={lpp} onChange={setLpp} />
        </F.Wrapper>

        <F.Wrapper label="Canton">
          <F.Select<GT.Canton>
            value={canton}
            options={Geo.cantonListOptionSet}
            onChange={setCanton}
          />
        </F.Wrapper>
      </F.Form>

      {brut !== "" && <BaseSummary base={brut} />}

      {brut !== "" && lpp !== "" && (
        <Table lppYearly={lpp} base={brut} deductions={U.getDeductions(brut)} />
      )}

      <FormMonth />
    </>
  );
};
