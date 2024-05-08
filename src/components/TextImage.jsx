import React from "react";
import LinkButton from "./LinkButton";

const TextImage = ({ reverseAlignment, TextImageData }) => {
  const { text, linkObj, image, headingText } = TextImageData;

  const flexDirection = reverseAlignment
    ? "md:flex-row-reverse"
    : "md:flex-row";
  return (
    <div
      className={`flex w-full bg-primary-400 flex-col md:justify-between items-center md:flex-row ${flexDirection}`}
    >
      <div className="flex py-6 text-center md:text-2xl md:py-0 flex-col items-center gap-2 md:w-1/2 ">
        <div className="text-2xl font-bold">{headingText}</div>
        <p className="md:text-sm font-normal">{text}</p>
        <div className="mt-4">
          <LinkButton linkObj={linkObj} />
        </div>
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
