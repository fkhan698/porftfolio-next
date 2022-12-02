import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Herro from "../components/Herro/Herro";

import About from "../components/About/About";
import SinglePost from "../components/Blog/SinglePost/SinglePost";

const Layout = ({}) => {
  return (
    <div className="container">
      <Header />

      <SinglePost />
      <Footer />
    </div>
  );
};

export default Layout;
