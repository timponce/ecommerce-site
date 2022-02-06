import React from "react";
import Navbar from "./components/Navbar";
import ArticlesBody from "./components/ArticlesBody";
import Footer from "./components/Footer";

export default function ArticlesPage(props) {
  return (
    <div>
      <Navbar cart={props.cart} openCart={props.openCart} />
      <div id="body">
        <ArticlesBody />
      </div>
      <Footer />
    </div>
  );
}
