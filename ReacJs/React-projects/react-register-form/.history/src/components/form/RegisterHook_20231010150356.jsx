// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdow/DropdownHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const dataDropdown = [
  {
    id: 1,
    value: "frontend",
    text: "Front end",
  },
  {
    id: 2,
    value: "backtend",
    text: "Back end",
  },
  {
    id: 3,
    value: "fullstack",
    text: "Full stack",
  },
];
const schema = yup
  .object({
    username: yup.string().required("Please enter your name"),
    email: yup.string().email().required("Please enter your email"),
    password: yup.string().required("Please enter your name"),
    gender: yup
      .string()
      .required("Please select your gender")
      .oneOf(["male", "female"], "You can only select male or female"),
    job: yup
      .string()
      .required("Please select your job")
      .oneOf(["teacher", "developer", "doctor", "constructor"]),
    term: yup.boolean().required("Please accept the terms and conditions"),
  })
  .required();
const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      className="max-w-[300px] mx-auto py-10"
      onSubmit={handleSubmit(onSubmitHandler)}
      autoComplete="off"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          name="username"
          id="username"
          placeholder="Enter your username"
          control={control}
          type="text"
        ></InputHook>
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
        {/* <p className="text-red-500 text-sm">Please enter your username</p> */}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="cursor-pointer">
          Email
        </label>
        <InputHook
          name="email"
          id="email"
          placeholder="Enter your email"
          control={control}
          type="email"
        ></InputHook>
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          id="password"
          placeholder="Enter your password"
          control={control}
          type="password"
        ></InputHook>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
        {/* <p className="text-red-500 text-sm">Please enter your email</p> */}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} value="male" name="gender"></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              value="female"
              name="gender"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        {errors.gender && (
          <p className="text-sm text-red-500">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Are you</label>
        <DropdownHook
          control={control}
          setValue={setValue}
          data={dataDropdown}
          name="job"
          dropdownLabel="Please select"
        ></DropdownHook>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Are you</label>
        <DropdownHook
          control={control}
          setValue={setValue}
          data={dataDropdown}
          name="job"
          dropdownLabel="Please select"
        ></DropdownHook>
      </div>
      <div className="flex flex-col gap-3">
        <CheckboxHook
          control={control}
          text="I accept the terms and conditions"
          name="term"
        ></CheckboxHook>
      </div>
     
      <button
        type="submit"
        className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;
