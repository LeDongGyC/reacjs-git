import React from "react";

const RegisterHook = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter yourr username" />
        <p>Please enter your username</p>
      </div>
    </div>
  );
};

export default RegisterHook;
