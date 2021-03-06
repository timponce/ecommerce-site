import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";
import ArticlesPage from "./ArticlesPage";
import AboutPage from "./AboutPage";

export default function RouteSwitch() {
  const [products, setProducts] = React.useState({
    hairTiesArray: [
      {
        name: "Hair Tie 1",
        id: "1",
        price: "9.99",
        quantity: 1,
        category: "Hair Ties",
      },
      {
        name: "Hair Tie 2",
        id: "2",
        price: "9.99",
        quantity: 1,
        category: "Hair Ties",
      },
      {
        name: "Hair Tie 3",
        id: "3",
        price: "9.99",
        quantity: 1,
        category: "Hair Ties",
      },
      {
        name: "Hair Tie 4",
        id: "4",
        price: "9.99",
        quantity: 1,
        category: "Hair Ties",
      },
      {
        name: "Hair Tie 5",
        id: "5",
        price: "9.99",
        quantity: 1,
        category: "Hair Ties",
      },
      {
        name: "Hair Tie 6",
        id: "6",
        price: "9.99",
        quantity: 1,
        category: "Hair Ties",
      },
    ],
    hairProductsArray: [
      {
        name: "Hair Product 1",
        id: "7",
        price: "14.99",
        quantity: 1,
        category: "Hair Products",
      },
      {
        name: "Hair Prodcut 2",
        id: "8",
        price: "19.99",
        quantity: 1,
        category: "Hair Products",
      },
      {
        name: "Hair Product 3",
        id: "9",
        price: "9.99",
        quantity: 1,
        category: "Hair Products",
      },
      {
        name: "Hair Product 4",
        id: "10",
        price: "14.99",
        quantity: 1,
        category: "Hair Products",
      },
      {
        name: "Hair Prodcut 5",
        id: "11",
        price: "19.99",
        quantity: 1,
        category: "Hair Products",
      },
      {
        name: "Hair Product 6",
        id: "12",
        price: "9.99",
        quantity: 1,
        category: "Hair Products",
      },
    ],
    hairBrushesArray: [
      {
        name: "Hair Brush 1",
        id: "12",
        price: "34.99",
        quantity: 1,
        category: "Hair Brushes",
      },
      {
        name: "Hair Brush 2",
        id: "13",
        price: "19.99",
        quantity: 1,
        category: "Hair Brushes",
      },
      {
        name: "Hair Brush 3",
        id: "14",
        price: "24.99",
        quantity: 1,
        category: "Hair Brushes",
      },
      {
        name: "Hair Brush 4",
        id: "15",
        price: "34.99",
        quantity: 1,
        category: "Hair Brushes",
      },
      {
        name: "Hair Brush 5",
        id: "16",
        price: "19.99",
        quantity: 1,
        category: "Hair Brushes",
      },
      {
        name: "Hair Brush 6",
        id: "17",
        price: "24.99",
        quantity: 1,
        category: "Hair Brushes",
      },
    ],
  });
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  function openCart() {
    setIsCartOpen(!isCartOpen);
  }

  const [cart, setCart] = React.useState([]);

  function addToCart(targetItem) {
    setCart((prevState) =>
      prevState.some((item) => item.id === targetItem.id)
        ? prevState.map((item) =>
            item.id === targetItem.id
              ? { ...item, quantity: Number(item.quantity + 1) }
              : { ...item }
          )
        : [...prevState, targetItem]
    );
  }

  function decrementQuantity(targetItem) {
    setCart((prevState) =>
      prevState.map((item) =>
        item.id === targetItem.id
          ? item.quantity <= 1
            ? removeFromCart(targetItem)
            : { ...item, quantity: Number(item.quantity - 1) }
          : { ...item }
      )
    );
  }

  function incrementQuantity(targetItem) {
    setCart((prevState) =>
      prevState.map((item) =>
        item.id === targetItem.id
          ? { ...item, quantity: Number(item.quantity + 1) }
          : { ...item }
      )
    );
  }

  function removeFromCart(targetItem) {
    let targetItemIndex = cart.indexOf(targetItem);
    cart.length === 1 && targetItem.quantity === 1 && setIsCartOpen(false);
    setCart((prevState) => [
      ...prevState.slice(0, targetItemIndex),
      ...prevState.slice(targetItemIndex + 1),
    ]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={products}
              cart={cart}
              addToCart={addToCart}
              isCartOpen={isCartOpen}
              openCart={openCart}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
            />
          }
        />
        <Route
          path="/ShopPage"
          element={
            <ShopPage
              products={products}
              cart={cart}
              addToCart={addToCart}
              isCartOpen={isCartOpen}
              openCart={openCart}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
            />
          }
        />
        <Route
          path="/ArticlesPage"
          element={
            <ArticlesPage
              cart={cart}
              isCartOpen={isCartOpen}
              openCart={openCart}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
            />
          }
        />
        <Route
          path="/AboutPage"
          element={
            <AboutPage
              cart={cart}
              isCartOpen={isCartOpen}
              openCart={openCart}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
