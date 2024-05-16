import React from "react";
import ArrowButton from "../../../components/buttons/ArrowButton";
import ArrowRight from "../../../assets/ArrowRight.svg";
import ReturnButton from "./ReturnButton";
const ContactForm = () => {
  const fields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Smatha Clarken",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "example@youremail.com",
    },
    {
      id: "phone",
      label: "Phone",
      type: "text",
      placeholder: "(123) 456 - 7890",
    },
    { id: "company", label: "Company", type: "text", placeholder: "Moon" },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Type your message here...",
    },
  ];

  return (
    <form className="w-full p-4 md:w-3/4 gap-4 flex flex-col md:grid md:grid-cols-2 ">
      {fields.map((field) => (
        <div
          key={field.id}
          className={` ${field.id === "message" ? "md:col-span-2" : ""}`}
        >
          <label
            htmlFor={field.id}
            className="block mb-2 font-medium text-gray-900"
          >
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              rows="5"
              className="bg-gray-50 border outline-none w-full border-gray-300 text-gray-900 text-sm p-2.5"
              placeholder={field.placeholder}
              required
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              className="bg-gray-50 border outline-none w-full border-gray-300 text-gray-900 text-sm p-2.5"
              placeholder={field.placeholder}
              required
            />
          )}
        </div>
      ))}
      <div class="flex justify-between">
        <ReturnButton />
        <ArrowButton
          text={"Send Message"}
          ContactButton={true}
          showArrow={true}
        />
      </div>
    </form>
  );
};

export default ContactForm;
