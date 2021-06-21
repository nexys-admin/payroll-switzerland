import React from "../../_snowpack/pkg/react.js";
import AverageSalary from "./main.js";
import * as GT from "../geo/type.js";
import * as F from "../components/form/index.js";
import * as Geo from "../geo/index.js";
const Form = ({onChange}) => {
  return /* @__PURE__ */ React.createElement(F.Wrapper, {
    label: "Canton"
  }, /* @__PURE__ */ React.createElement(F.Select, {
    value: void 0,
    options: Geo.cantonListOptionSet,
    onChange
  }));
};
export default () => {
  const [canton, setCanton] = React.useState(GT.Canton.VD);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Form, {
    onChange: setCanton
  }), canton && /* @__PURE__ */ React.createElement(AverageSalary, {
    canton
  }));
};
