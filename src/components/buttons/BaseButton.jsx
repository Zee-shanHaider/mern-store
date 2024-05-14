import React from "react";

const BaseButton = ({ text = "ADD TO CART" }) => {
  return (
    <button className="text-center w-full text-sm md:text-base cursor-pointer p-2 border border-black">
      {text}
    </button>
  );
};

export default BaseButton;
