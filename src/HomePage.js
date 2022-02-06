import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

export default function HomePage(props) {
  return (
    <div>
      <Navbar cart={props.cart} />
      <Hero />
      <div id="body">
        <ProductCarousel
          selectedProducts={props.products.hairTiesArray}
          cart={props.cart}
          addToCart={props.addToCart}
        />
        <Signup />
      </div>
      <Footer />
    </div>
  );
}
