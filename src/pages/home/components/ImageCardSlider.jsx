import React from "react";
const ImageCardSlider = ({ sliderArr }) => {
  return (
    <div className="flex mt-4 w-full gap-4 md:justify-between mx-auto overflow-hidden">
      {sliderArr.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="h-64 w-64">
            <img className="object-fill" src={item.image} alt="" />
          </div>
          <div className="text-base">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageCardSlider;
