import React from "react";

const BaseButton = ({ text }) => {
  return (
    <button className="text-center mt-3 w-full cursor-pointer p-2 border border-black">
      {text}
    </button>
  );
};

export default BaseButton;
