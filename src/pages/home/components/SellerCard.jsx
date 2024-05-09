import React from "react";
import SellerCardImg from "../../../assets/home/SellerCards/Image.png";
import BaseButton from "../../../components/buttons/BaseButton";

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
      <div className="mt-3 w-full">
        <BaseButton text={"ADD TO CART"} />
      </div>
    </div>
  );
};

export default SellerCard;
