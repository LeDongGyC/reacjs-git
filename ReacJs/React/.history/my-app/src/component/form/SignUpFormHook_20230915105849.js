import React from "react";
const SignUpFormHook = () => {
  return (
    <form

      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
         
        />
        {formmik.touched.firstName && formmik.errors.firstName ? (
          <div className="text-sm text-red-500">{formmik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Lastname</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-100"
          {...formmik.getFieldProps('lastName')}
        />
        {formmik.touched.lastName && formmik.errors.lastName ? (
          <div className="text-sm text-red-500">{formmik.errors.lastName}</div>
        ) : null}
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
