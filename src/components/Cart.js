import React from "react";

export default function Cart(props) {
  const cartProductCard = props.cart.map((item) => (
    <div className="cart--item" key={item.id}>
      <div className="cart--item-image">
        <h1 className="cart--image-placeholder-text">{item.name}</h1>
      </div>
      <div className="cart--item-information">
        <h2 className="cart--item-name">{item.name}</h2>
        {/* <p>Quantity: {item.quantity}</p>
          <button className="cart--decrement-button" onClick={() => props.decrementQuantity(item)}>-</button>
          <input type="number" className="cart--quantity-input" value={props.cart.quantity} onChange={() => props.adjustQuantity(item)} />
          <button className="cart--increment-button" onClick={() => props.incrementQuantity(item)}>+</button> */}
      </div>
    </div>
  ));

  return (
    <div className="cart">
      {cartProductCard}
      <button
        className="cart--checkout-button"
        onClick={() => alert("Logic not implemented on this project")}
      >
        Checkout
      </button>
    </div>
  );
}
