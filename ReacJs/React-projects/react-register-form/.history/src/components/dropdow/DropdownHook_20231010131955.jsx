import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useWatch } from "react-hook-form";

const DropdownHook = ({ control, setValue, name }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const dropdownValue = useWatch({
    control,
    name: "job",
    defaultValue: "", // default value before the render
  });
  console.log("dropdownValue", dropdownValue);
  const handleClick = (e) => {
    setValue(name, "FE");
  };
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>Select your job</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        <div className="p-5 cursor-pointer hover:" onClick={handleClick}>
          FE
        </div>
        <div className="p-5 cursor-pointer hover:" onClick={handleClick}>
          BE
        </div>
        <div className="p-5 cursor-pointer hover:" onClick={handleClick}>
          Fullstack
        </div>
      </div>
    </div>
  );
};

export default DropdownHook;
