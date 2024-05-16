import { useForm } from "react-hook-form";
import FormField from "../../../components/FormInput";
import ArrowButton from "../../../components/buttons/ArrowButton";

function Form() {
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
      label: "First Name",
      placeholder: "Smatha Clarken",
      name: "firstName",
      id: "firstName",
      type: "text",
      error: errors.firstName, // Assuming errors is defined
    },
    {
      label: "Last Name",
      placeholder: "Clarken",
      name: "lastName",
      id: "lastName",
      type: "text",
      error: errors.lastName, // Assuming errors is defined
    },
    {
      label: "Company",
      placeholder: "Company Name",
      name: "company",
      id: "company",
      type: "text",
      error: errors.company, // Assuming errors is defined
    },
    {
      label: "Country / Region",
      placeholder: "United State",
      name: "country",
      id: "country",
      type: "text", // You might want to use a dropdown/select here
      error: errors.country, // Assuming errors is defined
    },
    {
      label: "Street Address",
      placeholder: "Enter your street address",
      name: "streetAddress",
      id: "streetAddress",
      type: "text",
      error: errors.streetAddress, // Assuming errors is defined
    },
    {
      label: "Town / City",
      placeholder: "Enter your city",
      name: "city",
      id: "city",
      type: "text",
      error: errors.city, // Assuming errors is defined
    },
    {
      label: "State",
      placeholder: "Enter your state",
      name: "state",
      id: "state",
      type: "text",
      error: errors.state, // Assuming errors is defined
    },
    {
      label: "ZIP Code",
      placeholder: "Zip code",
      name: "zipCode",
      id: "zipCode",
      type: "text",
      error: errors.zipCode, // Assuming errors is defined
    },
    {
      label: "Phone",
      placeholder: "(123) 456 - 7890",
      name: "phone",
      id: "phone",
      type: "tel",
      error: errors.phone, // Assuming errors is defined
    },
    {
      label: "Email",
      placeholder: "example@youremail.com",
      name: "email",
      id: "email",
      type: "email",
      error: errors.email, // Assuming errors is defined
    },
    {
      label: "Order Notes",
      placeholder: "Type your message here...",
      name: "orderNotes",
      id: "orderNotes",
      type: "text",
      fieldType: "textarea",
      error: errors.orderNotes, // Assuming errors is defined
    },
  ];

  return (
    <div className="flex flex-col md:w-2/3 ">
      <div className="font-semibold">Billing Details</div>
      <form
        className="grid gap-4 md:grid-cols-2 p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <>
          {fields.map(
            (
              { fieldType, id, label, placeholder, name, type, error },
              index
            ) => (
              <div
                className={`flex flex-col ${
                  id === "streetAddress" ||
                  id === "email" ||
                  id === "orderNotes"
                    ? "md:col-span-2"
                    : ""
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
        <div className="flex flex-col md:flex-row md:justify-between">
          <ArrowButton
            text="CONTINUE TO SHIPPING"
            ContactButton={true}
            showArrow={true}
            buttonType={SubmitEvent} // Assuming SubmitEvent is defined
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
