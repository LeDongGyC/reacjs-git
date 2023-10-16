import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if(!values.firstName) {
    errors.re
  }
  return errors;
};
const SignUpForm = () => {
  const formmik = useFormik({
    initialValues: {
      firstName: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formmik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          value={formmik.values.firstName}
          onChange={formmik.handleChange}
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

export default SignUpForm;
