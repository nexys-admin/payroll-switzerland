import React, {useState} from "../../../_snowpack/pkg/react.js";
import {usePopper} from "../../../_snowpack/pkg/react-popper.js";
const Tooltip = () => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const {styles, attributes} = usePopper(referenceElement, popperElement, {
    modifiers: [{name: "arrow", options: {element: arrowElement}}]
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    ref: setReferenceElement
  }, "Reference element"), /* @__PURE__ */ React.createElement("div", {
    ref: setPopperElement,
    style: styles.popper,
    ...attributes.popper
  }, "Popper element", /* @__PURE__ */ React.createElement("div", {
    ref: setArrowElement,
    style: styles.arrow
  })));
};
export default Tooltip;
