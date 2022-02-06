import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ArticlesBody from "./components/ArticlesBody";
import Footer from "./components/Footer";

export default function ArticlesPage(props) {
  return (
    <div>
      <Navbar cart={props.cart} openCart={props.openCart} />
      {props.isCartOpen && <Cart cart={props.cart} />}
      <div id="body">
        <ArticlesBody />
      </div>
      <Footer />
    </div>
  );
}
