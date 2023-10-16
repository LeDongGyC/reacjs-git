import React from "react";

const RegisterHook = () => {
  return (
    <div className="max-w-[300px] mx-auto py-10">
      <div className="flex flex-col gap-3">
        <label htmlFor="username" className="cursor-pointer">Username</label>
        <input id="username" type="text" placeholder="Enter yourr username" className="p-4 border-gray-100 bg-white outline-none focus"/>
        <p className="text-red-500 text-sm">Please enter your username</p>
      </div>
    </div>
  );
};

export default RegisterHook;
