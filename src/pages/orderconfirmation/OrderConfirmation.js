import React from 'react';

import "./OrderConfirmation.css"

export const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
      <h2 className="order-confirmation-heading">Your Order Has Been Placed Successfully!</h2>
      <p className="order-confirmation-para">Thank you for shopping with us.</p>
      <p  className="order-confirmation-para">Your items will be shipped shortly.</p>
    </div>
  );
};

