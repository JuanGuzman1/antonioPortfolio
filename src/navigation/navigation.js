import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import TDPortfolio from "../screens/3DPortfolio";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Home from "../screens/Home";
import UnrealPortfolio from "../screens/UnrealPortfolio";

function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/unreal-portfolio" element={<UnrealPortfolio />} />
        <Route path="/3d-portfolio" element={<TDPortfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Navigation;
