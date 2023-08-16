import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export const Checkout = () => {
  const { cartItem, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState("");

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
      toast.error("Please select an address before placing the order");
      return;
    }
    clearCart();
    navigate("/order_confirmation"); 
   
  };

  return (
    <div className="checkout-container">
  <div className="address-section">
  <h2 className="checkout-heading">Checkout</h2>
    <h3 className="section-heading">Select Address</h3>
    <div className="address-option">
      <input
        type="radio"
        id="address1"
        name="address"
        value="Address 1"
        checked={selectedAddress === "Address 1"}
        onChange={() => setSelectedAddress("Address 1")}
      />
      <label htmlFor="address1">
        <h3 className="address-name">Dummy Name 1</h3>
        <p>Post Code: 39200</p>
        <p>Street: 5735 Birchpond Street</p>
        <p>State & City: Atlanta, GA</p>
        <p>Country: United States</p>
        <p>Phone No.: +1 987-654-3210</p>
      </label>
    </div>
    <div className="address-option">
      <input
        type="radio"
        id="address2"
        name="address"
        value="Address 2"
        checked={selectedAddress === "Address 2"}
        onChange={() => setSelectedAddress("Address 2")}
      />
      <label htmlFor="address2">
        <h3 className="address-name">Dummy Name 2</h3>
        <p>Post Code: 82200</p>
        <p>Street: 2835 Park Street</p>
        <p>State & City: Santa Clara, CA</p>
        <p>Country: United States</p>
        <p>Phone No.: +1 012-345-6789</p>
      </label>
    </div>
  </div>
  <div className="order-summary">
    <h3 className="section-heading">Order Summary</h3>
    {cartItem.map((item) => (
      <div key={item._id} className="item">
        {item.title} - Quantity: {item.quantity} - Price: ${item.price}
      </div>
    ))}
    <div className="total">
      Total: $
      {cartItem.reduce(
        (totalPrice, item) => (totalPrice += item.price * item.quantity),
        0
      )}
    </div>
    <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
  </div>
  
</div>
  );
}