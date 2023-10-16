import React from "react";

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
        </div>
      </form>
    </div>
  );
};

export default RegisterFormik;
