import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";
import Detail from "./Detail";
import Cart from "./Cart";
import Checkout from "./Checkout";

import { Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <div className="content">
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
