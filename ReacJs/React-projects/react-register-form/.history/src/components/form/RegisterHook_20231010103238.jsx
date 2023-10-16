// eslint-disable-next-line no-unused-vars
import React from "react";
import { Form, useForm } from "react-hook-form";
import InputHook from "../input/InputHook";

const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      className="max-w-[300px] mx-auto py-10"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook name = "username" id = "username" placeholder="Enter your username" control={control}></InputHook>
        {/* <input
          id="username"
          type="text"
          placeholder="Enter your username"
          className="p-4 border-gray-100 bg-white outline-none focus:border-blue-400 transition-all"
        /> */}
        <p className="text-red-500 text-sm">Please enter your username</p>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white ro">Submit</button>
    </form>
  );
};

export default RegisterHook;
