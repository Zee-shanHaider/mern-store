import React from "react";
import Seller from "../../home/Seller";
import LeftArrow from "../../../assets/pagination/Left.svg";
import RightArrow from "../../../assets/pagination/Right.svg";
const Products = () => {
  const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="h-full md:w-3/4">
      <Seller dataArr={dataArr} page={"Shop"} />
      <div className="flex gap-4 justify-end">
        <img src={LeftArrow} alt="" />
        <div className="border p-1 px-2 border-primary-500">1</div>
        <div className="border p-1 px-2 border-primary-500">2</div>
        <div className="border p-1 px-2 border-primary-500">3</div>
        <div className="border p-1 px-2 border-primary-500">4</div>
        <img src={RightArrow} alt="" />
      </div>
    </div>
  );
};

export default Products;
