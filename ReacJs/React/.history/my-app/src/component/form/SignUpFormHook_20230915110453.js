import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
const SignUpFormHook = () => {
  const [register, handleSubmit} = useForm();
  console.log(forms);
  return (
    <form className="p-10 w-full max-w-[500px] mx-auto">
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Lastname</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-100"
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your Email"
          className="p-4 rounded-md border border-gray-100"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white rounded-lg "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
