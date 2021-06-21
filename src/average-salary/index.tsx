import React from "react";
import AverageSalary from "./main";
import * as GT from "../geo/type";

import * as F from "../components/form/index";
import * as Geo from "../geo";

const Form = ({ onChange }: { onChange: (canton: GT.Canton) => void }) => {
  return (
    <F.Wrapper label="Canton">
      <F.Select<GT.Canton>
        value={undefined}
        options={Geo.cantonListOptionSet}
        onChange={onChange}
      />
    </F.Wrapper>
  );
};

export default () => {
  const [canton, setCanton] = React.useState<GT.Canton | undefined>(
    GT.Canton.VD
  );
  return (
    <>
      <Form onChange={setCanton} />
      {canton && <AverageSalary canton={canton} />}
    </>
  );
};
