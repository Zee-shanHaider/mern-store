import React from "react";
import ArrowButton from "../../../components/buttons/ArrowButton";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  const navigate = useNavigate();
  const checkoutNavigation = () => {
    console.log("this is a navigationnnnnnnnnnnnnn");
    navigate("/checkout");
  };
  return (
    <div className=" sm:w-full md:w-1/3  w-full flex flex-col gap-2 p-8 text-white bg-primary-100">
      <div className="text-sm font-medium">Cart Total</div>
      <div className="flex justify-between">
        <div className="text-xs">Sub Total</div>
        <div className="text-xs">$465.00</div>
      </div>
      <div className="flex justify-between">
        <div className="text-xs">Cart Total</div>
        <div className="text-xs">$500.00</div>
      </div>
      <ArrowButton
        parentFun={checkoutNavigation()}
        type={"checkout"}
        text={"PROCEED TO CHECKOUT"}
      />
    </div>
  );
};

export default CartTotal;
