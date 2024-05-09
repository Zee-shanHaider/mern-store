import React from "react";
import Seller from "../../home/Seller";

const Products = () => {
  const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="h-full md:w-3/4">
      <Seller dataArr={dataArr} page={"Shop"} />
    </div>
  );
};

export default Products;
