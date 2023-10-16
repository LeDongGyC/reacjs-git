import React from "react";

const SignUpForm = () => {
  return (
    <p>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">Firstname</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-100"
          />
        </div>
    </p>
  );
};

export default SignUpForm;
