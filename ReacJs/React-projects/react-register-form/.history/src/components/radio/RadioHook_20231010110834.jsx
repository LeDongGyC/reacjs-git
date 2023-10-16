import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <label className="w-5 h-5 cursor-pointer custom-radio">
      <input type="radio" className="hidden" {...field} {...props}/>
      <div className="w-full h-full bg-white rounded-full"></div>
  );
};

export default RadioHook;
