import React from "react";
import LinkButton from "./LinkButton";

const TextImage = ({ reverseAlignment, TextImageData }) => {
  const { text, linkObj, image, headingText, topText } = TextImageData;

  const flexDirection = reverseAlignment
    ? "md:flex-row-reverse"
    : "md:flex-row";
  return (
    <div
      className={`flex w-full bg-primary-400 flex-col md:justify-between items-center md:flex-row ${flexDirection}`}
    >
      <div className="flex py-6 text-center md:text-2xl md:py-0 flex-col items-center gap-2 md:w-1/2 ">
        {topText && (
          <div className="text-sm w-3/4 text-center font-medium text-primary-500">
            {topText}
          </div>
        )}
        <div className="md:text-3xl sm:w-full w-3/4 text-lg sm:text-lg  text-center font-bold">
          {headingText}
        </div>
        <p className="md:text-sm font-normal md:w-3/4 text-center">{text}</p>
        {linkObj && (
          <div className="mt-4">
            <LinkButton linkObj={linkObj} />
          </div>
        )}
      </div>
      <img
        src={image}
        alt=""
        srcset=""
        className="h-[348px] w-full md:w-1/2 object-center object-cover"
      />
    </div>
  );
};

export default TextImage;
