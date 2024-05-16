import React from "react";
import ArrowButton from "../../../components/buttons/ArrowButton";

const CouponApply = () => {
  return (
    <div className="flex flex-col gap-2 md:justify-between md:flex-row w-full md:px-4 px-2">
      <form action="" className="flex flex-col sm:flex-1 md:flex-row gap-4">
        <input
          type="text"
          placeholder="Coupon code"
          className="border-primary-100 border outline-none px-2 py-3 md:py-0"
        />
        <ArrowButton text={"APPLY COUPON"} />
      </form>
      <ArrowButton text={"UPDATE CART"} />
    </div>
  );
};

export default CouponApply;
