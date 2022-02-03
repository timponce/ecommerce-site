import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import ArticlesBody from "./components/ArticlesBody";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCarousel />
      <Footer />
    </div>
  );
}
