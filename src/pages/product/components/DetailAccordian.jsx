import React, { useState } from "react";
import Plus from "../../../assets/Plus.svg";
import Minus from "../../../assets/Minus.svg";

const DetailAccordian = ({ items }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="md:w-3/4">
      {items.map((item, index) => (
        <div className="relative mb-1" key={index}>
          <h6 className="mb-0">
            <button
              className="relative flex justify-between items-center w-full p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
              onClick={() => toggleAccordion(index)}
            >
              <p>{item.title}</p>
              <img
                src={openAccordion === index ? Minus : Plus}
                alt=""
                srcSet=""
              />
            </button>
          </h6>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openAccordion === index ? "h-auto" : "h-0"
            } overflow-hidden`}
          >
            <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailAccordian;
