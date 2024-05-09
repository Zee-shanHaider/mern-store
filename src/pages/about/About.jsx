import React from "react";
import { AboutHeader } from "./components";
import ImageCardSlider from "../home/components/ImageCardSlider";
import TextImage from "../../components/TextImage";

import TextImage1 from "../../assets/about/TextImage1.png";
import TextImage2 from "../../assets/about/TextImage2.png";
import TextImage3 from "../../assets/about/TextImage3.png";

import Slider1 from "../../assets/about/slider/Slider1.png";
import Slider2 from "../../assets/about/slider/Slider2.png";
import Slider3 from "../../assets/about/slider/Slider3.png";
import Slider4 from "../../assets/about/slider/Slider4.png";
import { SignupByEmail } from "../../components";
import HowWork from "./components/HowWork";

const About = () => {
  const textImageData = [
    {
      headingText: "1910",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing  eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
      image: TextImage1,
      reverseAlignment: false,
    },
    {
      headingText: "1990",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing  eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
      image: TextImage2,
      reverseAlignment: true,
    },
    {
      headingText: "2010",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing  eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
      image: TextImage3,
      reverseAlignment: false,
    },
  ];
  const sliderArr = [
    {
      image: Slider1,
      text: "Bernie PATTERSON",
      role: "CEO & Founder",
    },
    {
      image: Slider2,
      text: "Ophelia Vase",
      role: "Creative Director",
    },
    {
      image: Slider3,
      text: "CorbiN HOSSAIN",
      role: "Artist",
    },
    {
      image: Slider4,
      text: "Seren Bowl",
      role: "Marketing",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-3 md:gap-y-10 md:w-4/5 mx-auto">
        <AboutHeader />
        <div>
          {textImageData.map((ele, index) => (
            <TextImage
              TextImageData={ele}
              reverseAlignment={ele.reverseAlignment}
              key={index}
            />
          ))}
        </div>
        <HowWork />
        <ImageCardSlider sliderArr={sliderArr} />
        <SignupByEmail />
      </div>
    </>
  );
};

export default About;
