import React from "react";
import SellerCard from "./components/SellerCard";
const Seller = ({ headingText, dataArr }) => {
  return (
    <>
      <div className="md:text-2xl font-bold text-center">{headingText}</div>
      <div className="grid gap-4 grid-cols-2 md:gap-8 p-3 md:p-0 md:grid-cols-4">
        {dataArr.map((item, index) => (
          <SellerCard key={index} />
        ))}
      </div>
    </>
  );
};

export default Seller;
