import React, { useContext } from "react";
import { useController } from "react-hook-form";

const InputHook = ({ control, ...props }) => {
  const { field } = useController;
  return (
    <input className="p-4 border-gray-100 bg-white outline-none focus:border-blue-400 transition-all"></input>
  );
};

export default InputHook;
