import React from "react";

const RegisterHook = () => {
  return (
    <div className="max-w-[300px] mx-auto py-10">
      <div className="flex flex-col gap-3">
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter yourr username" className="p-4 border-gray-100 bg-white out"/>
        <p>Please enter your username</p>
      </div>
    </div>
  );
};

export default RegisterHook;
