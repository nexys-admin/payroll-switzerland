import React from "react";
import * as U from "./utils";

import Table from "./table";

import * as F from "../components/form/index";
import * as Geo from "../geo";

import AverageSalary from "./average-salary";

export default (): JSX.Element => {
  const [brut, setBrut] = React.useState<number | "">("");
  const [lpp, setLpp] = React.useState<number | "">("");
  const [canton, setCanton] = React.useState<Geo.Canton | undefined>(
    Geo.Canton.VD
  );

  Geo.getMunicipalities().then((x) => console.log(x));

  return (
    <>
      <F.Form>
        <F.Wrapper label={"Base"}>
          <F.Input.Number value={brut} onChange={setBrut} />
          {brut && <span>{U.formatAmount(brut / 12)}/mois</span>}
        </F.Wrapper>
        <F.Wrapper label={"LPP Yearly"}>
          <F.Input.Number value={lpp} onChange={setLpp} />
        </F.Wrapper>

        <F.Wrapper label="Canton">
          <F.Select<Geo.Canton>
            value={canton}
            options={Geo.cantonListOptionSet}
            onChange={setCanton}
          />
        </F.Wrapper>
      </F.Form>

      {brut !== "" && lpp !== "" && (
        <Table lppYearly={lpp} base={brut} deductions={U.getDeductions(brut)} />
      )}

      {canton && <AverageSalary canton={canton} />}
    </>
  );
};
