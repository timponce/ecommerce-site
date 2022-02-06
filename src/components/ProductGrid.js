import React from "react";

export default function ProductGrid(props) {
  const productCards = props.selectedProducts.map((item) => (
    <div className="product-card" key={item.id}>
      <h1 className="product-card--placeholder-text">{item.name}</h1>
      <button className="product-card--button">
        <span>Add to Bag</span> <span>{item.price}</span>
      </button>
    </div>
  ));

  return (
    <div className="product-grid--section">
      <h1 className="product-grid--heading">
        {props.selectedProducts[0].category}
      </h1>
      <div className="product-grid">{productCards}</div>
    </div>
  );
}
