import React from "react";
import Navbar from "./components/Navbar";
import AboutBody from "./components/AboutBody";
import Footer from "./components/Footer";

export default function AboutPage(props) {
  return (
    <div>
      <Navbar cart={props.cart} openCart={props.openCart} />
      <div id="body">
        <AboutBody />
      </div>
      <Footer />
    </div>
  );
}
