import React from "react";
import { Filters, Products } from "./components";

const Shop = () => {
  return (
    <div className="md:px-16 md:py-8 p-6">
      <div className="text-sm font-semibold pb-6">Showing 120 items</div>
      <div className="flex gap-16 justify-between">
        <Filters />
        <Products />
      </div>
    </div>
  );
};

export default Shop;
