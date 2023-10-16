import React from "react";
import { useController } from "react-hook-form";

const CheckboxHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <label className="w-5 h-5 cursor-pointer custom-radio">
      <input type="checkbox" className="hidden" {...field} {...props} />
      <div className="w-full h-full bg-white rounded-full"></div>
    </label>
  );
};

export default CheckboxHook;
