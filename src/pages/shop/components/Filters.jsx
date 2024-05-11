import React, { useState } from "react";

const Filters = () => {
  const categories = [
    "Ceramic",
    "Dinnerware",
    "Furniture",
    "Decor Art",
    "Gifts Set",
  ];
  const colors = ["white", "red", "green", "yellow", "black", "blue"];
  const priceRanges = [
    "$0 - $10",
    "$10 - $50",
    "$50 - $100",
    "$100 - $200",
    "> $200",
  ];
  const [color, setColor] = useState();

  const filterNames = ["Category", "Price Range", "Color", "Tags"];
  return (
    <div className="min-h-full md:flex flex-col gap-4 hidden w-80">
      {filterNames.map((filterName, index) => (
        <div
          key={index}
          className="border-t flex flex-col py-6 gap-4 border-primary-300"
        >
          <h6 className="text-sm font-medium text-gray-900">{filterName}</h6>
          {filterName === "Color" ? (
            <div className="flex pl-4 gap-4">
              {colors.map((item, colorIndex) => (
                <div
                  key={colorIndex}
                  onClick={() => setColor(item)}
                  className={`w-5 h-5 border ${
                    color === item &&
                    "outline outline-gray-500 outline-offset-1"
                  } ${
                    item === "white"
                      ? "bg-white "
                      : item === "red"
                      ? "bg-red-600"
                      : item === "green"
                      ? "bg-green-700"
                      : item === "yellow"
                      ? "bg-yellow-500"
                      : item === "black"
                      ? "bg-black"
                      : item === "blue"
                      ? "bg-blue-600"
                      : ""
                  }`}
                />
              ))}
            </div>
          ) : (
            <ul className="space-y-2 pl-4 text-sm">
              {filterName === "Category" || filterName === "Tags"
                ? categories.map((ele, categoryIndex) => (
                    <li key={categoryIndex} className="flex items-center gap-2">
                      <input
                        id={ele}
                        type="checkbox"
                        value={ele}
                        className="w-5 h-5 rounded-none cursor-pointer bg-gray-100 border-gray-300 text-primary-600"
                      />
                      <label
                        htmlFor={ele}
                        className="text-base font-base text-primary-600"
                      >
                        {ele}
                      </label>
                    </li>
                  ))
                : priceRanges.map((ele, priceIndex) => (
                    <li key={priceIndex} className="flex items-center gap-2">
                      <input
                        id={ele}
                        type="checkbox"
                        value={ele}
                        className="w-5 h-5 rounded-none cursor-pointer bg-gray-100 border-gray-300 text-primary-600"
                      />
                      <label
                        htmlFor={ele}
                        className="text-base font-base text-primary-600"
                      >
                        {ele}
                      </label>
                    </li>
                  ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
