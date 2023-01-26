import React from "react"
import About from "../components/About/About"
import Header from "../components/Header/Header"
const AboutLayout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <About />
      </div>
    </>
  )
}

export default AboutLayout
