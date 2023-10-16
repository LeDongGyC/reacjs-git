import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <label className="w-5 h-5 cursor-pointer">
      <input type="radio" className="hidden" {...field} {...props/>
      <div className=" bg-white rounded-full w-full h-full"></div>
    </label>
  );
};

export default RadioHook;
