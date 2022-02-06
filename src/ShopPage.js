import React from "react";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function ShopPage(props) {
  return (
    <div>
      <Navbar />
      <div className="product-grid-container">
        <ProductGrid selectedProducts={props.products.hairTiesArray} />
        <ProductGrid selectedProducts={props.products.hairProductsArray} />
        <ProductGrid selectedProducts={props.products.hairBrushesArray} />
      </div>
      <Footer />
    </div>
  );
}
