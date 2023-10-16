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
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      W
      </div>
    </Formik>
  );
};

export default SignUpFormv2;
