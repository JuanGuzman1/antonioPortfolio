import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Home from "../screens/Home";
import Portfolio from "../screens/Portfolio";

function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Navigation;
