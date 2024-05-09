import React from "react";
const ImageCardSlider = ({ sliderArr }) => {
  return (
    <div className="flex mt-4 mb-4 w-full gap-4 md:justify-between mx-auto overflow-hidden">
      {sliderArr.map(({ image, text, role }, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            className="object-center min-h-64 min-w-64 md:h-full md:w-full object-cover"
            src={image}
            alt=""
          />
          <div className="text-base font-medium">{text}</div>
          <div className="font-normal text-primary-500 text-xs">{role}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageCardSlider;
