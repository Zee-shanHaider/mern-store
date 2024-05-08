import React from "react";
import SellerCardImg from "../../../assets/home/SellerCards/Image.png";

const SellerCard = () => {
  return (
    <div className="flex flex-col">
      <img className="w-full h-full" src={SellerCardImg} alt="" />
      <div className="font-semibold text-sm mt-4">
        Small Ecru Ceramic Compote
      </div>
      <div className="font-semibold text-sm">$49.50</div>
      <p className="text-primary-500 text-sm mt-4">
        Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.
      </p>
      <button className="text-center mt-3 w-full cursor-pointer p-2 border border-black">
        ADD TO CART
      </button>
    </div>
  );
};

export default SellerCard;
