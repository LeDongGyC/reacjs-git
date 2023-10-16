import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Dai vai lon";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Dai vai lon";
//   }
//   return errors;
// };
const SignUpFormv2 = () => {
  const formmik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(20, "Dai vai lon").required("Nhap zo may"),
      lastName: Yup.string().max(20, "Dai vai lon").required("Nhap zo may"),
    }),
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
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          {...formmik.getFieldProps('firstName')}
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

export default SignUpFormv2;
