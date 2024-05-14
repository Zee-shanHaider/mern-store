import React from "react";

const ArrowButton = ({ text, ContactButton, ArrowRight }) => {
  return (
    <button
      className={`border text-center text-white bg-primary-100 border-white p-2 ${
        ContactButton ? "border-primary-600 w-full" : "border-white"
      }`}
    >
      {text}
      {ArrowRight && (
        <img className="inline-block ml-1" src={ArrowRight} alt="rightArrow" />
      )}
    </button>
  );
};

export default ArrowButton;
