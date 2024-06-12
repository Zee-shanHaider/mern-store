import React from "react";
import ReturnArrow from "../../../assets/ReturnArrow.svg";
const ReturnButton = () => {
  return (
    <button className="flex items-center gap-2 p-4 mx-auto md:mx-0">
      <img src={ReturnArrow} alt="Return Arrow" srcset="" />
      <span className="text-sm">RETURN TO CART</span>
    </button>
  );
};

export default ReturnButton;
