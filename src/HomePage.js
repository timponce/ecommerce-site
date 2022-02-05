import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

export default function HomePage(props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <div id="body">
        <ProductCarousel selectedProducts={props.products.hairTiesArray} />
        <Signup />
      </div>
      <Footer />
    </div>
  );
}
