import React from "react";
import Cross from "../../../assets/Close.svg";
import Product from "../../../assets/home/SellerCards/Image.png";
import QuantityCounter from "../../../components/QuantityCounter";
const MobileTable = () => {
  const data1 = [
    {
      photo: Product,
      product: "Product 1",
      price: "$10.00",
      quantity: 5,
      subtotal: "$50.00",
    },
    {
      photo: Product,
      product: "Product 2",
      price: "$20.00",
      quantity: 3,
      subtotal: "$60.00",
    },
    {
      photo: Product,
      product: "Product 3",
      price: "$15.00",
      quantity: 2,
      subtotal: "$30.00",
    },
  ];
  return (
    <>
      {data1.map((ele, index) => (
        <div
          key={index}
          className="flex flex-col border-b border-primary-500 p-4 gap-4"
        >
          <div>
            <img src={Cross} alt="" srcset="" />
          </div>
          <div className="flex gap-2 items-center">
            <img
              className="object-fill w-28 h-50"
              src={Product}
              alt=""
              srcset=""
            />
            <div className="text-center text-sm font-semibold">
              {ele.product}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>Price</div>
            <div>{ele.price}</div>
          </div>
          <div className="flex justify-between items-center">
            <div>Quantity</div>
            <QuantityCounter quantity={ele.quantity} />
          </div>
          <div className="flex justify-between items-center">
            <div>Subtotal</div>
            <div className="text-center text-sm font-semibold text-brown-200">
              {ele.subtotal}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MobileTable;
