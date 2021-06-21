import React from "react";
import * as U from "./utils";

import Table from "./table";

import * as F from "../components/form/index";
import * as Geo from "../geo";
import * as GT from "../geo/type";
import * as Municipality from "../geo/municipality";

import BaseSummary from "./base-summary";

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
    </>
  );
};
