import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import AboutBody from "./components/AboutBody";
import Footer from "./components/Footer";

export default function AboutPage(props) {
  return (
    <div>
      <Navbar cart={props.cart} openCart={props.openCart} />
      {props.isCartOpen && <Cart cart={props.cart} />}
      <div id="body">
        <AboutBody />
      </div>
      <Footer />
    </div>
  );
}
