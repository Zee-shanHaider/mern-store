import React from "react";

const ColorComponent = ({ colors, color, setColor }) => {
  return (
    <div>
      <div className="flex pl-4 gap-4">
        {colors.map((item, colorIndex) => (
          <div
            key={colorIndex}
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

export default ColorComponent;
