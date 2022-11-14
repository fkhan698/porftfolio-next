import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HerroCopy from "../components/Herro copy/Herro";

import About from "../components/About/About";
import Blog from "../components/Blog/Blog";

const BlogLayout = ({}) => {
  return (
    <>
      <Header />
      <HerroCopy></HerroCopy>

      <Footer />
    </>
  );
};

export default BlogLayout;
