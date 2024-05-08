import React from "react";
import HomeBadgeBG from "../assets/home/HomeBadgeBG.png";
import Icon from "../assets/home/Icon.svg";
const HomeBadge = () => {
  return (
    <>
      <div className="w-full md:relative md:h-full flex flex-col text-white">
        <img className="object-cover w-full h-full" src={HomeBadgeBG} alt="" />
        <div className="bg-brown-100 flex flex-col gap-4 p-8 justify-center items-center md:w-1/4 h-full md:absolute md:left-[160px]">
          <img src={Icon} alt="" srcset="" />
          <p className="text-[#FFFDFB] text-base">
            Handcrafted in Viet Nam since 1650
          </p>
          <div className="text-lg font-bold">
            BAT TRANG <br /> DINNER SET
          </div>
          <button className="text-brown-100 md:mt-3 bg-white py-3 px-10 text-center cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeBadge;
