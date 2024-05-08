import React from "react";
import logo from "../assets/footer/logo.svg";
import ArrowButton from "./buttons/ArrowButton";

const Footer = () => {
  const footerLinks = [
    {
      title: "About",
      items: [
        "Mission",
        "Our Team",
        "Awards",
        "Testimonials",
        "Privacy policy",
      ],
    },
    {
      title: "Services",
      items: [
        "Web design",
        "Web development",
        "Mobile design",
        "UI/UX design",
        "Branding design",
      ],
    },
    {
      title: "Portfolio",
      items: [
        "Corporate websites",
        "E-commerce",
        "Mobile apps",
        "Landing pages",
        "UI/UX projects",
      ],
    },
  ];
  return (
    <div className="flex flex-col text-white bg-[#3A3845] p-3 md:px-24 divide-y-2 gap-2">
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
          {footerLinks.map((section, index) => (
            <div
              key={index}
              className="text-sm md:text-sm flex flex-col gap-3  items-start"
            >
              <div className="text-lg font-semibold">{section.title}</div>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="text-sm md:text-sm">
                  {item}
                </div>
              ))}
            </div>
          ))}
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
