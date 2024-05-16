import React from "react";
import Table from "./components/Table";
import CouponApply from "./components/CouponApply";
import CartTotal from "./components/CartTotal";
import MobileTable from "./components/MobileTable";

const Cart = () => {
  const onDelete = (id) => {
    console.log(id, "id");
  };
  return (
    <div className="p-2 md:px-16 flex flex-col gap-4">
      <div className="font-bold text-lg">Cart (3 Items)</div>
      <div className="md:block hidden">
        <Table onDelete={onDelete} />
      </div>
      <div className="md:hidden block">
        <MobileTable />
      </div>
      <div className="flex justify-between">
        <CouponApply />
      </div>
      <div className="md:justify-end md:flex">
        <CartTotal />
      </div>
    </div>
  );
};

export default Cart;
