import { React, useState } from "react";
import StarRating from "./components/RatingStar";
import ColorComponent from "../../components/ColorComponent";
import QuantityCounter from "../../components/QuantityCounter";
import ArrowButton from "../../components/buttons/ArrowButton";
import BaseButton from "../../components/buttons/BaseButton";
import heart from "../../assets/navbar/Heart.svg";
import SocialLinks from "../../components/SocialLinks";
import DetailAccordian from "./components/DetailAccordian";
const ProductDetail = () => {
  const colors = ["white", "red", "green", "yellow", "black", "blue"];
  const [color, setColor] = useState();
  const [quantity, setQuantity] = useState(1);
  const accordionItems = [
    {
      title: "Details",
      content: "Content for Details accordion",
    },
    {
      title: "Dimensions",
      content: "Content for Dimensions accordion",
    },
    {
      title: "Reviews",
      content: "Content for Reviews accordion",
    },
  ];
  return (
    <div className="flex flex-col gap-5 md:justify-between w-full">
      <div className="flex gap-2 flex-col">
        <div className="font-semibold text-xl ">Marin White Dinner Plate</div>
        <div className="flex gap-4 items-center">
          <StarRating filledStars={4} />
          <div className="md:text-base text-xs">(1256 Reviews)</div>
          <div className="md:text-base text-sm pl-2">
            Stock:{" "}
            <span className="text-brown-100 font-semibold">In Stock</span>
          </div>
        </div>
        <div>
          <span className="font-medium text-base">$35</span>
          <span className="font-medium ml-4 text-primary-500">$50</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-base">
          Color:{" "}
          <span className="text-brown-100 font-semibold">
            {color &&
              color.charAt(0).toUpperCase() + color.substring(1, color.length)}
          </span>
        </div>
        <ColorComponent color={color} setColor={setColor} colors={colors} />
      </div>

      <div className="flex flex-col gap-2 md:w-3/4">
        <div className="flex gap-4 flex-1">
          <div className="w-2/5 md:w-2/12">
            <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
          </div>
          <div className="w-full">
            <ArrowButton text={"ADD TO CART"} ContactButton={true} />
          </div>
        </div>
        <div className="flex w-full gap-4 flex-1">
          <div className="w-full">
            <BaseButton text="BUY NOW" />
          </div>
          <img
            src={heart}
            alt=""
            srcset=""
            className="border border-primary-500 p-2 text-center"
          />
        </div>
      </div>
      <SocialLinks />
      <DetailAccordian items={accordionItems} />
    </div>
  );
};

export default ProductDetail;
