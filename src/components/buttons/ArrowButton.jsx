import React from "react";
import ArrowRight from "../../assets/ArrowRight.svg";

const ArrowButton = ({
  text,
  ContactButton,
  showArrow,
  parentFun,
  type,
  buttonType,
}) => {
  return (
    <button
      onClick={() => parentFun()}
      type={buttonType}
      className={`border text-center text-white bg-primary-100 md:px-6 border-white p-2 ${
        ContactButton ? "border-primary-600 w-full" : "border-white"
      } ${
        type === "checkout" ? "border-t py-3 border-white text-sm mt-4" : ""
      } `}
    >
      {text}
      {showArrow && (
        <img className="inline-block ml-1" src={ArrowRight} alt="rightArrow" />
      )}
    </button>
  );
};

export default ArrowButton;
