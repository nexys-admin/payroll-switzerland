import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Footer from './footer';
import Header from './header';

const basename = import.meta.env.SNOWPACK_PUBLIC_URL;

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <Router basename={basename}>
      <Header/>
      <div className="container">{children}</div>
      <Footer/>
    </Router>
  );
}
export default Layout;
