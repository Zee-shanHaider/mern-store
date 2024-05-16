import React from "react";
import ReturnArrow from "../../../assets/ReturnArrow.svg";
const ReturnButton = () => {
  return (
    <>
      <button className="flex gap-2">
        <img src={ReturnArrow} alt="Return Arrow" srcset="" />
        <span className="text-sm">Back to Cart</span>
      </button>
    </>
  );
};

export default ReturnButton;
