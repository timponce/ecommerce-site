import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

export default function HomePage(props) {
  return (
    <div>
      <Navbar cart={props.cart} openCart={props.openCart} />
      {props.isCartOpen && <Cart cart={props.cart} />}
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
