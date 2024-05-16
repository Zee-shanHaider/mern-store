import React from "react";
import CheckoutForm from "./components/CheckoutForm";
import Payment from "./components/Payment";

const Checkout = () => {
  return (
    <div className="flex flex-col md:w-full p-4 md:flex-row md:gap-4 md:p-10">
      <CheckoutForm />
      <Payment />
    </div>
  );
};

export default Checkout;
