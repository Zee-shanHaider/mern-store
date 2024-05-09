import React from "react";

const AboutHeader = () => {
  return (
    <div className="flex flex-col gap-2 p-5 items-center justify-center">
      <div className="md:text-3xl text-2xl font-bold text-primary-600 ">
        ABOUT MOON
      </div>
      <div className="text-primary-500 text-base md:w-1/3 text-center">
        Moon's handmade ceramic products have been around since 1650, let's
        explore our journey
      </div>
    </div>
  );
};

export default AboutHeader;
