import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFormv2 = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(20, "Dai vai lon").required("Nhap zo may"),
        lastName: Yup.string().max(20, "Dai vai lon").required("Nhap zo may"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">Firstname</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <ErrorMessage></ErrorMessage>
        </div> name
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">Lastname</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white rounded-lg "
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpFormv2;
