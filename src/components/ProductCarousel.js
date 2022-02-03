import React from "react";

export default function ProductCarousel() {
  const productsArray = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
  ];

  const productCard = productsArray.map((product) => (
    <div className="product-card">
      <h1 className="product-card--placeholder-text">{product}</h1>
    </div>
  ));
  return <div className="product-carousel">{productCard}</div>;
}
