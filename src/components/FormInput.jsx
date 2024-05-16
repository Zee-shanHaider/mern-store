// import { FormFieldProps } from "@/types";

const FormField = ({
  type,
  fieldType,
  placeholder,
  name,
  register,
  error,
  id,
  label,
  valueAsNumber,
}) => (
  <>
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {label}
    </label>
    {fieldType === "textarea" ? (
      <textarea
        id={id}
        rows={5}
        className="bg-gray-50 border outline-none w-full border-primary-100 text-gray-900 text-sm p-2.5"
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
      />
    ) : (
      <input
        type={type}
        id={id}
        className="bg-gray-50 border outline-none w-full border-primary-100 text-gray-900 text-sm p-2.5"
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
      />
    )}
    {error && <span className="error-message">{error.message}</span>}
  </>
);
export default FormField;
