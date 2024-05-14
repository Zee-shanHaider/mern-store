import React from "react";
import FaceBook from "../assets/SocialLinks/Facebook.svg";
import Insta from "../assets/SocialLinks/Instagram.svg";
import LinkedIn from "../assets/SocialLinks/LinkedIn.svg";
import Twitter from "../assets/SocialLinks/Twitter.svg";

const SocialLinks = () => {
  const links = [FaceBook, Twitter, Insta, LinkedIn];
  return (
    <>
      <div className="font-semibold text-base">Share this:</div>
      <div className="flex gap-4">
        {links.map((ele, index) => (
          <img src={ele} key={index} alt={ele} srcset="" />
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
