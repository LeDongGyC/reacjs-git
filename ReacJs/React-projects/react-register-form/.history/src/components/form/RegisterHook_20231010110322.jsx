// eslint-disable-next-line no-unused-vars
import React from "react";
import { Form, useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";

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
        <InputHook
          name="username"
          id="username"
          placeholder="Enter your username"
          control={control}
          type="text"
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter your username</p>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="cursor-pointer">
          Email
        </label>
        <InputHook
          name="email"
          id="email"
          placeholder="Enter your email"
          control={control}
          type="email"
        ></InputHook>
        {/* <p className="text-red-500 text-sm">Please enter your email</p> */}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          id="password"
          placeholder="Enter your password"
          control={control}
          type="password"
        ></InputHook>
        {/* <p className="text-red-500 text-sm">Please enter your email</p> */}
      </div>
      <div className="flex flex-col gap-3">
        <label className="cursor-pointer">Gender</label>
        <div className="flex item-center gap-5">
          <div className="flex item-center gap-3">
            <RadioHook></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex item-center gap-3">
            <RadioHook control={control} value = ""></RadioHook>
            <span>Female</span>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;
