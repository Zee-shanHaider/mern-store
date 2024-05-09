import React from "react";
const HomeBadge = ({ badgeData }) => {
  const { icon, heading, badgeImage, text, page, socialIcons } = badgeData;
  return (
    <>
      <div className="w-full md:relative md:h-full flex flex-col items-center text-white">
        <img className="object-cover w-full h-full" src={badgeImage} alt="" />
        <div
          className={`flex flex-col gap-4 p-8 justify-center items-center md:w-1/4 w-full h-full md:absolute md:left-[160px] ${
            page === "Contact" ? "bg-primary-100" : "bg-brown-100"
          }`}
        >
          <img src={icon} alt="" srcset="" />
          {page === "Home" && (
            <p className="text-[#FFFDFB] text-base">{text}</p>
          )}
          <h3 className="md:text-2xl md:w-3/4 text-center text-lg font-semibold">
            {heading}
            {page === "Contact" && (
              <hr class="my-2 h-0.5 border-t-0 bg-[#CAC9CF] " />
            )}
          </h3>
          {page === "Contact" && (
            <p className="text-[#FFFDFB] text-base">{text}</p>
          )}
          {page === "Contact" && (
            <div className="flex gap-2">
              {socialIcons.map((ele, index) => (
                <img src={ele} key={index} alt="" srcset="" />
              ))}
            </div>
          )}
          {page === "Home" && (
            <button className="text-brown-100 md:mt-3 bg-white py-3 px-10 text-center cursor-pointer">
              Shop Now
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeBadge;
