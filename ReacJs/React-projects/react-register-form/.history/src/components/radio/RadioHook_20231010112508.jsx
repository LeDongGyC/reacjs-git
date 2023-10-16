// eslint-disable-next-line no-unused-vars
import React from "react";
import { useController } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    // eslint-disable-next-line react/prop-types
    name: props.name,
  });
  return (
    <label className="w-5 h-5 cursor-pointer custom-radio">
      <input type="radio" className="hidden" {...field} {...props} />
      <div className="w-full h-full bg-white rounded-full"></div>
    </label>
  );
};

export default RadioHook;
