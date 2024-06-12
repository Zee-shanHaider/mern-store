import React from "react";
import { Button } from "flowbite-react";
import { useState } from "react";
import Cross from "../../assets/Close.svg";
import Logo from "../../assets/contact/Icon.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormField from "../FormInput";

import { GoogleLogin } from "@react-oauth/google";
import FacebookLoginCom from "../FacebookLogin";
const Login = ({ title = "Login to your Account" }) => {
  const [openModal, setOpenModal] = useState(true);
  const [email, setEmail] = useState("");
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
      placeholder: "Email",
      name: "email",
      id: "email",
      type: "email",
      error: errors.email, // Assuming errors is defined
    },
    {
      placeholder: "Password",
      name: "password",
      id: "cardName",
      type: "password",
      error: errors.password, // Assuming errors is defined
    },
  ];

  const handleLoginSuccess = (response) => {
    console.log(response);
  };

  const handleLoginError = (error) => {
    console.error("Login Failed:", error);
  };

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <>
      <Button className="text-black" onClick={() => setOpenModal(true)}>
        Toggle modal
      </Button>

      {openModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto mx-auto px-10 max-w-3/4">
              {/*content*/}
              <div className="py-4 px-4 border-0 rounded-md shadow-lg relative flex flex-col gap-2 w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-end">
                  <img
                    onClick={() => onCloseModal()}
                    className="cursor-pointer"
                    src={Cross}
                    alt=""
                    srcset=""
                  />
                </div>
                {/*header*/}
                <img
                  className="object-cover block mx-auto  my-2 w-12 text-center h-12"
                  src={Logo}
                  alt=""
                />
                <h3 className="text-2xl font-bold text-black text-center ">
                  {title}
                </h3>
                {/*body*/}
                <div className="text-sm text-center md:text-left md:pl-4">
                  Don't have an account?{" "}
                  <Link className="underline font-bold text-brown-100" to="/">
                    Sign Up{" "}
                  </Link>
                </div>
                <div className="mx-auto">
                  <GoogleLogin
                    size="large"
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginError}
                  />
                </div>
                <FacebookLoginCom />
                <div className="relative flex-auto">
                  <form
                    className="gap-2 flex flex-col p-2"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    {fields.map(
                      (
                        {
                          fieldType,
                          id,
                          label,
                          placeholder,
                          name,
                          type,
                          error,
                        },
                        index
                      ) => (
                        <FormField
                          key={index}
                          type={type}
                          fieldType={fieldType}
                          id={id}
                          label={label}
                          placeholder={placeholder}
                          name={name}
                          variant="standard"
                          register={register} // Assuming register is defined
                          error={error}
                        />
                      )
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 backdrop-blur-sm"></div>
        </>
      ) : null}
    </>
  );
};

export default Login;
