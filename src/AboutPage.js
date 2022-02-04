import React from "react";
import Navbar from "./components/Navbar";
import AboutBody from "./components/AboutBody";
import Footer from "./components/Footer";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div id="body">
        <AboutBody />
      </div>
      <Footer />
    </div>
  );
}