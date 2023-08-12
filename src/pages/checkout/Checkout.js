import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const { cartItem, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState("");

  const handlePlaceOrder = () => {
    // Perform the order placement logic here
    // You can clear the cart and perform any other necessary actions
    clearCart();
    navigate("/order_confirmation"); // Navigate to the order confirmation page
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Select Address</h3>
        <div>
          <input
            type="radio"
            id="address1"
            name="address"
            value="Address 1"
            checked={selectedAddress === "Address 1"}
            onChange={() => setSelectedAddress("Address 1")}
          />

          <label htmlFor="address1">
          <h3>Dummy Name 1 </h3>
            <p>Post Code : 39200</p>
            <p>Street : 5735 Birchpond Street</p>
            <p>State(Province) & City : Atlanta, GA</p>
            <p>Country : United States</p>
            <p>Phone No. : +1 987-654-3210</p>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="address2"
            name="address"
            value="Address 2"
            checked={selectedAddress === "Address 2"}
            onChange={() => setSelectedAddress("Address 2")}
          />
          <label htmlFor="address2">
          <h3>Dummy Name 2 </h3>
            <p>Post Code : 82200</p>
            <p>Street : 2835 Park Street</p>
            <p>State(Province) & City : Santa Clara, CA</p>
            <p>Country : United States</p>
            <p>Phone No. : +1 012-345-6789</p>
          </label>
        </div>
      </div>
      <div>
        <h3>Order Summary</h3>
        {cartItem.map((item) => (
          <div key={item._id}>
            {item.title} - Quantity: {item.quantity} - Price: {item.price}
          </div>
        ))}
        <div>
          Total:{" "}
          {cartItem.reduce(
            (totalPrice, item) => (totalPrice += item.price * item.quantity),
            0
          )}
        </div>
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}