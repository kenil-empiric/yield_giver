import React from "react";
import PrimaryNav from "../header/PrimaryNav";
import Footer from "../footer/Footer";
import SecondaryNav from "../header/SecondaryNav";
import NotFound from "../../pages/NotFound";

function Layout({ children, headerPath }) {
  // const validRoutes = ["/home", "/about", "/contact", "/pool"];
  return (
    <>
      <div>
        {headerPath === "/" ? (
          <PrimaryNav />
        ) : headerPath === "*" ? (
          ""
        ) : (
          <SecondaryNav />
        )}
        {children}
        {headerPath === "/" ? <Footer /> : ""}
      </div>
    </>
  );
}

export default Layout;
