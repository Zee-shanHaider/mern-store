import React from "react";
import CustomSwiper from "../../components/CustomSwiper";
import ProductDetail from "./ProductDetail";
import Seller from "../home/Seller";
const Product = () => {
  return (
    <div className="md:p-10 flex flex-col md:gap-10 gap:4 py-5 px-10 md:px-24 ">
      <div className="md:flex md:flex-row flex flex-col gap-6 md:gap-12">
        <CustomSwiper />
        <ProductDetail />
      </div>
      <Seller
        headingText={"SIMILAR ITEMS"}
        dataArr={[1, 2, 3, 4]}
        page={"Detail"}
      />
    </div>
  );
};

export default Product;
