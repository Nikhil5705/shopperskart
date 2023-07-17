import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartContext, CartProvider } from "./context/CartContext";
import { WishlistContext, WishlistProvider } from "./context/WishlistContext";

export {CartContext}
export {WishlistContext}
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <App />  
        </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
