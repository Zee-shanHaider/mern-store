import React, { useState } from "react";

const Filters = () => {
  const colors = ["white", "red", "green", "yellow", "black", "blue"];
  const [color, setColor] = useState();

  return (
    <div className="min-h-full md:flex flex-col gap-4 hidden w-80">
      <div className="border-t flex flex-col py-6 gap-4 border-primary-300">
        <h6 className="text-sm font-medium text-gray-900">Category</h6>
        <ul className="space-y-2 pl-4 text-sm">
          <li className="flex items-center gap-2">
            <input
              id="logitech"
              type="checkbox"
              value=""
              className="w-5 h-5 rounded-none cursor-pointer bg-gray-100 border-gray-300 text-primary-600"
            />

            <label
              for="logitech"
              className="text-base font-base text-primary-600"
            >
              Logitech (97)
            </label>
          </li>
        </ul>
      </div>
      <div className="border-t flex flex-col py-6 gap-4 border-primary-300">
        <h6 className="text-sm font-medium text-gray-900">Price Range</h6>
        <ul className="space-y-2 pl-4 text-sm">
          <li className="flex items-center gap-2">
            <input
              id="logitech"
              type="checkbox"
              value=""
              className="w-5 h-5 rounded-none cursor-pointer bg-gray-100 border-gray-300 text-primary-600"
            />

            <label
              for="logitech"
              className="text-base font-base text-primary-600"
            >
              $0 - $10
            </label>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        {colors.map((item, index) => (
          <div
            key={index}
            onClick={() => setColor(item)}
            className={`w-5 h-5 border ${
              color === item && "outline outline-gray-500 outline-offset-1"
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
    </div>
  );
};

export default Filters;
