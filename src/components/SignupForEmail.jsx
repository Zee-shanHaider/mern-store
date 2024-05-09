import React from "react";
import BaseButton from "./buttons/BaseButton";

const SignupForEmail = () => {
  return (
    <div className="flex flex-col py-10 items-center justify-center gap-1">
      <div className="text-base text-primary-500 text-center">
        Sign up for emails
      </div>
      <div className="md:text-4xl text-lg text-center">
        For NEWS, COLLECTIONS & MORE
      </div>
      <form className="md:w-1/3 w-3/4 mx-auto py-2" action="">
        <input
          class="w-full text-center text-base py-2 border-b border-gray-500 focus:outline-none"
          type=""
          placeholder="Enter your email address"
        />
      </form>
      <div className="md:w-1/6 w-1/3">
        <BaseButton text={"SIGN UP"} />
      </div>
    </div>
  );
};

export default SignupForEmail;
