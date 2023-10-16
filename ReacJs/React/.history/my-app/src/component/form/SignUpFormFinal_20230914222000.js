import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
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
        terms: Yup.boolean().oneOf(
          [true],
          "Please check the terms and conditions"
        ),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <MyInput
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
        ></MyInput>
        {/* <div className="flex flex-col gap-2 mb-5">
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
        </div> */}
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
            placeholder="Enter your intro"
            className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
            as="textarea"
          ></Field>
          <div className="text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="job">Select your job</label>
          <Field
            name="job"
            placeholder="Enter your job"
            className="p-4 rounded-md border border-gray-100"
            as="select"
          >
            <option value="frontend">Frontend DEV</option>
            <option value="backend">Backend DEV</option>
            <option value="fullstack">Fullstack DEV</option>
          </Field>
          <div className="text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-5">
          <Field
            name="terms"
            type="checkbox"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <p>I accept the terms and conditions</p>
          <div className="text-red-500">
            <ErrorMessage name="terms"></ErrorMessage>
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
const MyInput = ({ label, ...props }) => {
  const field = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.name || props.id}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...props}
      />
      <div className="text-red-500"></div>
    </div>
  );
};
export default SignUpFormFinal;
