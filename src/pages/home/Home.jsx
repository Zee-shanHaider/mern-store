import React from "react";
import { HomeBadge, SignupByEmail, TextAndImage } from "../../components";
import ImageCardSlider from "./components/ImageCardSlider";
import Seller from "./Seller";

import SliderImage from "../../assets/home/slider/Image.png";
import SliderImage1 from "../../assets/home/slider/Image1.png";
import SliderImage2 from "../../assets/home/slider/Image2.png";
import SliderImage3 from "../../assets/home/slider/Image3.png";

import TextImage1 from "../../assets/home/TextImage1.png";
import TextImage2 from "../../assets/home/TextImage2.png";
import TextImage3 from "../../assets/home/TextImage3.png";
import TextImage4 from "../../assets/home/TextImage4.png";

import HomeBadgeImage from "../../assets/home/HomeBadgeBG.png";
import HomeIcon from "../../assets/home/Icon.svg";

const Home = () => {
  const TextImageData1 = {
    headingText: "Up to 40% off our Christmas collection".toUpperCase(),
    linkObj: {
      link: "#",
      text: "SHOP NOW",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipiscing  eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
    image: TextImage1,
  };
  const TextImageData2 = {
    headingText: "Made in viet Nam since 1450".toUpperCase(),
    linkObj: {
      link: "#",
      text: "LEARN MORE",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipiscing  eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
    image: TextImage2,
  };
  const TextImageData3 = {
    headingText: "Our History".toUpperCase(),
    linkObj: {
      link: "#",
      text: "LEARN MORE",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipiscing  eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
    image: TextImage3,
  };
  const TextImageData4 = {
    topText: "TABLEWARE",
    headingText: "The secrets to a kitchen room".toUpperCase(),
    linkObj: {
      link: "#",
      text: "READ MORE",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipiscing  eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
    image: TextImage4,
  };
  const sliderArr = [
    {
      image: SliderImage,
      text: "TABLEWARE",
    },
    {
      image: SliderImage1,
      text: "HOME DECOR",
    },
    {
      image: SliderImage2,
      text: "HOLIDAY",
    },
    {
      image: SliderImage3,
      text: "COLLECTION",
    },
  ];
  const badgeData = {
    badgeImage: HomeBadgeImage,
    icon: HomeIcon,
    text: "Handcrafted in Viet Nam since 1650",
    heading: " BAT TRANG DINNER SET",
    page: "Home",
  };
  return (
    <>
      <HomeBadge badgeData={badgeData} />
      <div className="flex flex-col gap-3 md:gap-5 md:w-4/5 mx-auto">
        <ImageCardSlider sliderArr={sliderArr} />
        <TextAndImage TextImageData={TextImageData1} />
        <Seller
          headingText={"BEST SELLERS"}
          dataArr={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
        <div>
          <TextAndImage TextImageData={TextImageData2} />
          <TextAndImage
            TextImageData={TextImageData3}
            reverseAlignment={true}
          />
        </div>
        <Seller headingText={"NEW ARRIVAL"} dataArr={[1, 2, 3, 4]} />
        <div className="text-2xl font-bold text-center">OUR BLOG</div>
        <TextAndImage TextImageData={TextImageData4} />
        <SignupByEmail />
      </div>
    </>
  );
};

export default Home;
