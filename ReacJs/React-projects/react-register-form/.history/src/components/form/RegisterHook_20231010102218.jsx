// eslint-disable-next-line no-unused-vars
import React from "react";
import { Form, useForm } from "react-hook-form";

const RegisterHook = () => {
  const {register,handleSubmit,forncontrol} = useForm()
  return (
    <Form className="max-w-[300px] mx-auto py-10">
      <div className="flex flex-col gap-3">
        <label htmlFor="username" className="cursor-pointer">Username</label>
        <input id="username" type="text" placeholder="Enter yourr username" className="p-4 border-gray-100 bg-white outline-none focus:border-blue-400 transition-all"/>
        <p className="text-red-500 text-sm">Please enter your username</p>
      </div>
    </Form>
  );
};

export default RegisterHook;
