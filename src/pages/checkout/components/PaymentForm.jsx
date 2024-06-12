import React from "react";
import Visa from "../../../assets/payment/Visa.png";
import Master from "../../../assets/payment/Master.png";
import Paypal from "../../../assets/payment/paypal.png";
import FormField from "../../../components/FormInput";
import ArrowButton from "../../../components/buttons/ArrowButton";
import { useForm } from "react-hook-form";
const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("SUCCESS", data);
  };

  const fields = [
    {
      placeholder: "Card number",
      name: "cardNo",
      id: "cardNo",
      type: "text",
      error: errors.cardNo, // Assuming errors is defined
    },
    {
      placeholder: "Name on card",
      name: "cardName",
      id: "cardName",
      type: "text",
      error: errors.cardName, // Assuming errors is defined
    },
    {
      placeholder: "Expiration date  (MM/YY)",
      name: "expiration",
      id: "expiration",
      type: "text",
      error: errors.expiration, // Assuming errors is defined
    },
    {
      placeholder: "Security code",
      name: "securityCode",
      id: "securityCode",
      type: "text", // You might want to use a dropdown/select here
      error: errors.securityCode, // Assuming errors is defined
    },
  ];
  return (
    <>
      <div className="bg-primary-100 p-4 flex flex-col gap-4 w-full text-white">
        <div className="font-semibold">Payment</div>

        <form
          className="md:grid gap-4 flex flex-col p-4 md:grid-cols-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-between col-span-2 items-center">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                className="accent-white md:w-4 md:h-4 focus:accent-brown-100"
                name="payment"
                id=""
              />
              <label className="text-xs">Credit Card</label>
            </div>
            <div className="flex gap-2">
              <img src={Visa} alt="" srcset="" />
              <img src={Master} alt="" srcset="" />
            </div>
          </div>
          <hr className="h-px my-1 col-span-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <>
            {fields.map(
              (
                { fieldType, id, label, placeholder, name, type, error },
                index
              ) => (
                <div
                  className={`flex flex-col ${
                    id === "cardNo" || id === "cardName" ? "md:col-span-2" : ""
                  }`}
                  key={index}
                >
                  <FormField
                    type={type}
                    fieldType={fieldType}
                    id={id}
                    label={label}
                    placeholder={placeholder}
                    name={name}
                    register={register} // Assuming register is defined
                    error={error}
                  />
                </div>
              )
            )}
          </>
          <hr className="h-px col-span-2 my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              className="accent-white md:w-4 md:h-4 focus:accent-brown-100"
              name="option"
              value="male"
            />
            <img src={Paypal} alt="Paypal" srcset="" />
          </div>
          <div className="w-full col-span-2">
            <ArrowButton
              text="PLACE ORDER"
              ContactButton={true}
              buttonType={SubmitEvent} // Assuming SubmitEvent is defined
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
