import React from "react";
import { Filters, Products } from "./components";

const Shop = () => {
  return (
    <div className="md:p-16 p-4">
      <div className="text-sm font-semibold pb-10">Showing 120 items</div>
      <div className="flex gap-8 justify-between">
        <Filters />
        <Products />
      </div>
    </div>
  );
};

export default Shop;
