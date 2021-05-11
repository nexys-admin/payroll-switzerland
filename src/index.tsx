import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import Router from "./router";

ReactDOM.render(
  <Layout>
    <Router />
  </Layout>,
  document.getElementById("root")
);
