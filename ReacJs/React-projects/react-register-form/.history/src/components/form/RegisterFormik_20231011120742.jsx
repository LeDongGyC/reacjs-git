import React from "react";
import InputFormik from "../input/InputFormik";

const RegisterFormik = () => {
  return (
    <div>
      <form
        className="max-w-[300px] mx-auto py-10"
        autoComplete="off"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="username" className="cursor-pointer">
            Username
          </label>
          <InputFormik></InputFormik>
          <p className="text-sm text-red-500">{errors.username.message}</p>
        </div>
      </form>
    </div>
  );
};

export default RegisterFormik;
