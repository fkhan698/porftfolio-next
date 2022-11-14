import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Herro from "../components/Herro/Herro";

import About from "../components/About/About";

const Layout = ({}) => {
  return (
    <div className="container">
      <Header />
      <Herro />
      <About />

      <Footer />
    </div>
  );
};

export default Layout;
