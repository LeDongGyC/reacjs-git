import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return <label className="w-5 h-5 bg-white rounded-full">
    <input type="radio" className="hidden" />
  </label>;
};

export default RadioHook;
