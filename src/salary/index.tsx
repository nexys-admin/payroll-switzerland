import React from "react";
import * as U from "./utils";

import Table from "./table";

import * as F from "../components/form";

export default (): JSX.Element => {
  const [brut, setBrut] = React.useState<number | "">("");
  const [lpp, setLpp] = React.useState<number | "">("");

  return (
    <>
      <F.Form>
        <F.Wrapper label={"Base"}>
          <F.InputNumber value={brut} onChange={setBrut} />
           {brut && U.formatAmount(brut/12)}
        </F.Wrapper>
        <F.Wrapper label={"LPP Yearly"}>
          <F.InputNumber value={lpp} onChange={setLpp} />
        </F.Wrapper>
      </F.Form>

      {brut !== "" && lpp !== "" && (
        <Table lppYearly={lpp} base={brut} deductions={U.getDeductions(brut)} />
      )}
    </>
  );
};
