import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function ShopPage(props) {
  return (
    <div>
      <Navbar cart={props.cart} openCart={props.openCart} />
      {props.isCartOpen && <Cart cart={props.cart} />}
      <div className="product-grid-container">
        <ProductGrid
          selectedProducts={props.products.hairTiesArray}
          cart={props.cart}
          addToCart={props.addToCart}
        />
        <ProductGrid
          selectedProducts={props.products.hairProductsArray}
          cart={props.cart}
          addToCart={props.addToCart}
        />
        <ProductGrid
          selectedProducts={props.products.hairBrushesArray}
          cart={props.cart}
          addToCart={props.addToCart}
        />
      </div>
      <Footer />
    </div>
  );
}
