import React from "react";

import { Link, BrowserRouter as Router } from "react-router-dom";

import { menus } from "./links";
import Footer from './footer';

const basename = import.meta.env.SNOWPACK_PUBLIC_URL;

const style = {
  borderTop: "1px solid #e5e5e5",
  borderBottom: "1px solid #e5e5e5",
  boxShadow: "0 .25rem .75rem rgba(0, 0, 0, .05)",
};

const title = "Payroll Switzerland";


const Header = () => (
  <header>
    <div
      style={style}
      className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"
    >
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <Link to={"/"}>{title}</Link>
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        {menus.map((menu, i) => (
          <Link className="p-2 text-dark" key={i} to={menu.link}>
            {menu.name}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);


const Layout = ({ children }: { children: any }) => {
  return (
    <Router basename={basename}>
      <Header/>
      <div className="container">{children}</div>
      <Footer/>
    </Router>
  );
}
export default Layout;
