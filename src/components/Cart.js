import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Cart(props) {
  function getCartTotalPrice() {
    let pricesByQuantityArray = props.cart.map(
      (item) => item.price * item.quantity
    );
    let unRoundedTotalPrice = pricesByQuantityArray.reduce((a, b) => a + b);
    let roundedTotalPrice = unRoundedTotalPrice.toFixed(2);
    return roundedTotalPrice;
  }

  const cartProductCard = props.cart.map((item) => (
    <div className="cart--item" key={item.id}>
      <div className="cart--item-image">
        <h1 className="cart--image-placeholder-text">{item.name}</h1>
      </div>
      <div className="cart--item-information">
        <h2 className="cart--item-name">{item.name}</h2>
        <button
          className="cart--quantity-button"
          onClick={() => props.decrementQuantity(item)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span>Quantity: {item.quantity}</span>
        <button
          className="cart--quantity-button"
          onClick={() => props.incrementQuantity(item)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  ));

  return (
    <div className="cart">
      <h1 className="cart--header">Your Cart</h1>
      <div className="cart--items-container">{cartProductCard}</div>
      <div className="cart--footer">
        <h2 className="cart--total-price">Cart Total: {getCartTotalPrice()}</h2>
        <button
          className="cart--checkout-button"
          onClick={() => alert("Logic not implemented on this project")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
