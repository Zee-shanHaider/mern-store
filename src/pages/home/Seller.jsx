import React from "react";
import SellerCard from "./components/SellerCard";
const Seller = ({ headingText, dataArr, page }) => {
  return (
    <>
      <h3
        className={`md:text-3xl font-bold ${
          page === "Detail" ? "text-left" : "text-center"
        }`}
      >
        {headingText}
      </h3>
      <div
        className={`grid gap-4 grid-cols-2 md:gap-8 p-3 md:p-0 ${
          page === "Shop" ? "md:grid-cols-3" : "md:grid-cols-4"
        }`}
      >
        {dataArr.map((item, index) => (
          <SellerCard key={index} />
        ))}
      </div>
    </>
  );
};

export default Seller;
