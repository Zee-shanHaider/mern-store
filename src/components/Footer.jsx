import React from "react";
import logo from "../assets/footer/logo.svg";
import ArrowButton from "./buttons/ArrowButton";

const Footer = () => {
  return (
    <div className="flex  flex-col bg-[#3A3845] p-3 md:px-24 text-white divide-y-2 gap-2">
      <div className="grid sm:text-white md:grid-cols-3 divide-y-2 md:divide-x-2 md:divide-y-0 ">
        <div className="w-2/3 md:w-full col-span-1 gap-3 flex flex-col justify-start items-start p-3">
          <div className="w-[145px]">
            <img className="object-fit" src={logo} alt="Logo" />
          </div>
          <p className="text-[#E5E5E5] text-xs">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris sed ma
          </p>
          <ArrowButton text={"GET STARTED"} />
        </div>
        <div className="col-span-2 p-3 gap-2 md:gap-2 grid grid-cols-2 md:grid-cols-3">
          <div className="text-sm md:text-sm flex flex-col gap-3  items-start">
            <div className="text-lg font-semibold">About</div>
            <div className="text-sm md:text-sm">Mission</div>
            <div className="text-sm md:text-sm">Our Team</div>
            <div className="text-sm md:text-sm">Awards</div>
            <div className="text-sm md:text-sm">Testimonials</div>
            <div className="text-sm md:text-sm">Privacy policy</div>
          </div>
          <div className="text-sm md:text-sm flex flex-col gap-3  items-start">
            <div className="text-lg font-semibold">Services</div>
            <div className="text-sm md:text-sm">Mission</div>
            <div className="text-sm md:text-sm">Our Team</div>
            <div className="text-sm md:text-sm">Awards</div>
            <div className="text-sm md:text-sm">Testimonials</div>
            <div className="text-sm md:text-sm">Privacy policy</div>
          </div>
          <div className="text-sm md:text-sm flex flex-col gap-3  items-start">
            <div className="text-lg font-semibold">Portfolio</div>
            <div className="text-sm md:text-sm">Mission</div>
            <div className="text-sm md:text-sm">Our Team</div>
            <div className="text-sm md:text-sm">Awards</div>
            <div className="text-sm md:text-sm">Testimonials</div>
            <div className="text-sm md:text-sm">Privacy policy</div>
          </div>
        </div>
      </div>
      <div className="p-3 text-xs text-center">
        Copyright © 2023 Moon| All Rights Reserved | Terms and Conditions |
        Privacy Policy
      </div>
    </div>
  );
};

export default Footer;
