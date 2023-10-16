import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Nhap zo may"),
        lastName: Yup.string().required("Nhap zo may"),
        email: Yup.string().required("Nhap zo may").email("Sai email kia may"),
        intro: Yup.string().required("Nhap zo may"),
        job: Yup.string().required("Nhap zo may"),
        terms: Yup.boolean,
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
          <div className="text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">Lastname</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="email"
            placeholder="Enter your email"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-red-500">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="intro">Introduce yourself</label>
          <Field
            name="intro"
            type="text"
            placeholder="Enter your intro"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="job">job</label>
          <Field
            name="job"
            type="text"
            placeholder="Enter your job"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
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

export default SignUpFormFinal;
