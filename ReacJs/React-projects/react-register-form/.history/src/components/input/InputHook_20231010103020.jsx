import React from "react";
import { useController } from "react-hook-form";

const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue = "",
  });
  return (
    <input
      className="p-4 border-gray-100 bg-white outline-none focus:border-blue-400 transition-all"
      {...field}
      {...props}
    ></input>
  );
};

export default InputHook;
