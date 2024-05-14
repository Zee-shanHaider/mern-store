import React from "react";
import Minus from "../assets/Minus.svg";
import Plus from "../assets/Plus.svg";

const QuantityCounter = ({ quantity, setQuantity }) => {
  return (
    <div className="flex items-center justify-between border py-2">
      <img
        className="cursor-pointer px-2"
        src={Minus}
        onClick={() => {
          if (quantity > 1) setQuantity((quantity -= 1));
        }}
        alt="Minus"
        srcset=""
      />
      <div>{quantity}</div>
      <img
        className="cursor-pointer px-2"
        onClick={() => setQuantity((quantity += 1))}
        src={Plus}
        alt="Minus"
        srcset=""
      />
    </div>
  );
};

export default QuantityCounter;
