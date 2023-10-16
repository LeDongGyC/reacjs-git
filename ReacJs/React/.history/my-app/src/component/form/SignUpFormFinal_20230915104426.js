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
        setTimeout(()=>{
          actions.setSubmitting()
        },5000)
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <MyInput
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
        ></MyInput>
        <MyInput
          label="Last name"
          name="lastName"
          placeholder="Enter your last name"
          id="lastName"
        ></MyInput>
        <MyInput
          label="Email address"
          name="email"
          placeholder="Enter your email address"
          id="email"
          type="email"
        ></MyInput>
        <MyTextarea
          label="Introduce yourself"
          name="intro"
          placeholder="Enter your introduce"
          id="intro"
        ></MyTextarea>
        <MySelectBox name="job" label="Select your job">
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
          <option value="fullstack">Fullstack Developer</option>
        </MySelectBox>
        <MyCheckbox name="terms">
          <p>I accept the terms and conditions</p>
        </MyCheckbox>
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
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.name || props.id}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="p-4 rounded-md border border-gray-100"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
