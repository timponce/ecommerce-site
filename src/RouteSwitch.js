import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";
import ArticlesPage from "./ArticlesPage";
import AboutPage from "./AboutPage";

export default function RouteSwitch() {
  const [products, setProducts] = React.useState({
    hairTiesArray: [
      { name: "Hair Tie 1", id: "1", price: "9.99", category: "Hair Ties" },
      { name: "Hair Tie 2", id: "2", price: "9.99", category: "Hair Ties" },
      { name: "Hair Tie 3", id: "3", price: "9.99", category: "Hair Ties" },
      { name: "Hair Tie 4", id: "4", price: "9.99", category: "Hair Ties" },
      { name: "Hair Tie 5", id: "5", price: "9.99", category: "Hair Ties" },
      { name: "Hair Tie 6", id: "6", price: "9.99", category: "Hair Ties" },
    ],
    hairProductsArray: [
      {
        name: "Hair Product 1",
        id: "7",
        price: "14.99",
        category: "Hair Products",
      },
      {
        name: "Hair Prodcut 2",
        id: "8",
        price: "19.99",
        category: "Hair Products",
      },
      {
        name: "Hair Product 3",
        id: "9",
        price: "9.99",
        category: "Hair Products",
      },
      {
        name: "Hair Product 4",
        id: "10",
        price: "14.99",
        category: "Hair Products",
      },
      {
        name: "Hair Prodcut 5",
        id: "11",
        price: "19.99",
        category: "Hair Products",
      },
      {
        name: "Hair Product 6",
        id: "12",
        price: "9.99",
        category: "Hair Products",
      },
    ],
    hairBrushesArray: [
      {
        name: "Hair Brush 1",
        id: "12",
        price: "34.99",
        category: "Hair Brushes",
      },
      {
        name: "Hair Brush 2",
        id: "13",
        price: "19.99",
        category: "Hair Brushes",
      },
      {
        name: "Hair Brush 3",
        id: "14",
        price: "24.99",
        category: "Hair Brushes",
      },
      {
        name: "Hair Brush 4",
        id: "15",
        price: "34.99",
        category: "Hair Brushes",
      },
      {
        name: "Hair Brush 5",
        id: "16",
        price: "19.99",
        category: "Hair Brushes",
      },
      {
        name: "Hair Brush 6",
        id: "17",
        price: "24.99",
        category: "Hair Brushes",
      },
    ],
  });

  const [cart, setCart] = React.useState([]);

  const [isCartOpen, setIsCartOpen] = React.useState(false);

  function addToCart(targetItem) {
    console.log(targetItem);
    setCart((prevState) => [...prevState, targetItem]);
    console.log(cart);
  }

  function openCart() {
    setIsCartOpen(!isCartOpen);
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
              openCart={openCart}
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
              openCart={openCart}
            />
          }
        />
        <Route
          path="/ArticlesPage"
          element={<ArticlesPage cart={cart} openCart={openCart} />}
        />
        <Route
          path="/AboutPage"
          element={<AboutPage cart={cart} openCart={openCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
