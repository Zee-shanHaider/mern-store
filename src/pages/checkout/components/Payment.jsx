import React from "react";
import PaymentForm from "./PaymentForm";

const Payment = () => {
  return (
    <div className="flex flex-col gap-3 md:pb-6 justify-between w-full md:w-1/4">
      <div className="flex flex-col w-full  gap-2">
        <div className="flex justify-between">
          <div className="text-base font-semibold">Product</div>
          <div className="text-base font-semibold">Subtotal</div>
        </div>
        <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex justify-between">
          <div className="text-sm">Porcelain Dinner Plate (27cm)</div>
          <div className="text-sm">$59.00</div>
        </div>
        <div className="flex justify-between">
          <div className="text-sm">Porcelain Dinner Plate (27cm)</div>
          <div className="text-sm">$59.00</div>
        </div>
        <div className="flex justify-between md:mt-2 mt-1 font-semibold">
          <div className="text-sm">Subtotal</div>
          <div className="text-sm">$59.00</div>
        </div>
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Shipping</div>
          <div className="text-sm">$59.00</div>
        </div>
        <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex justify-between mt-3 font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-sm">$559.00</div>
        </div>
      </div>
      <PaymentForm />
    </div>
  );
};

export default Payment;
