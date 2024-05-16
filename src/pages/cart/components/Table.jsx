import React from "react";
import Bin from "../../../assets/Trash.svg";
import Cross from "../../../assets/Close.svg";
import Product from "../../../assets/home/SellerCards/Image.png";
import QuantityCounter from "../../../components/QuantityCounter";

const Table = ({ data, onDelete }) => {
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
    <table className="md:w-full">
      <thead className="bg-primary-100 text-white md:py-8">
        <tr className="py-10">
          <th className="py-2">
            <img src={Bin} alt="Delete" className="mx-auto" srcset="" />
          </th>
          <th className="text-base font-normal">PHOTO</th>
          <th className="text-base font-normal">PRODUCT</th>
          <th className="text-base font-normal">PRICE</th>
          <th className="text-base font-normal">QUALITY</th>
          <th className="text-base font-normal">SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
        {data1.map((item, index) => (
          <tr key={index} className="border-b py-4">
            <td className="text-center">
              <button onClick={() => onDelete(index)}>
                <img src={Cross} className="mx-auto" alt="Cross" srcset="" />
              </button>
            </td>
            <td>
              <img
                className="mx-auto object-fill w-28 h-50 py-4"
                src={item.photo}
                alt="Product"
              />
            </td>
            <td className="text-center text-sm font-semibold">
              {item.product}
            </td>
            <td className="text-sm font-semibold text-center">{item.price}</td>
            <td className="text-center text-sm font-semibold">
              <QuantityCounter quantity={item.quantity} />
            </td>
            <td className="text-center text-sm font-semibold text-brown-200">
              {item.subtotal}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
