import React from "react";
import image from "../../../assets/about/TextImage4.png";
const HowWork = () => {
  const data = [
    {
      heading: "Product Design",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.",
    },
    {
      heading: "Crafted",
      text: "Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.",
    },
    {
      heading: "Sell Product",
      text: "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.",
    },
  ];
  return (
    <div
      className={`flex w-full bg-primary-400 flex-col md:justify-between items-center md:flex-row-reverse`}
    >
      <div className="flex flex-col text-left p-6 md:text-2xl md:py-0 gap-4 md:w-1/2 ">
        <div className="md:text-3xl sm:w-full w-3/4 text-lg sm:text-lg font-medium">
          HOW WE WORK
        </div>
        {data.map((item, index) => (
          <div key={index} className="text-left">
            <div className="font-medium text-lg">{item.heading}</div>
            <div className="font-normal text-sm text-primary-500">
              {item.text}
            </div>
          </div>
        ))}
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

export default HowWork;
