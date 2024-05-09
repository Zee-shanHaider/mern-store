import React from "react";
import ArrowRight from "../../assets/ArrowRight.svg";

const ArrowButton = ({ text, ContactButton }) => {
  return (
    <button
      className={`border text-center text-white bg-primary-100 border-white p-2 ${
        ContactButton ? "border-primary-600 w-full" : "border-white"
      }`}
    >
      {text}
      <img className="inline-block ml-1" src={ArrowRight} alt="rightArrow" />
    </button>
  );
};

export default ArrowButton;
