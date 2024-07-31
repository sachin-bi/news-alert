import React from "react";
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";

function Layout() {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      {/* <About /> */}
      <ContactUs/>
      <Footer />
    </>
  );
}

export default Layout;
