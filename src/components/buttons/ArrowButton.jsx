import React from "react";
// import { ArrowRight } from "@mui/icons-material";
import ArrowRight from "../../assets/Arrow Right.svg";

const ArrowButton = ({ text }) => {
  return (
    <button className="border text-center border-white p-2">
      {text}
      <img className="inline-block ml-1" src={ArrowRight} alt="rightArrow" />
    </button>
  );
};

export default ArrowButton;
