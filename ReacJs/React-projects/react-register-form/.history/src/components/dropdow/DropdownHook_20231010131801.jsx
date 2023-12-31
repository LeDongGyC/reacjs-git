import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useWatch } from "react-hook-form";

const DropdownHook = ({ control, setValue }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const dropdownValue = useWatch({
    control,
    name: "job",
    defaultValue: "", // default value before the render
  });
  console.log("dropdownValue", dropdownValue);
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
        <div className="p-5" onClick={handle}>FE</div>
        <div className="p-5" onClick={handle}>BE</div>
        <div className="p-5" onClick={handle}>Fullstack</div>
      </div>
    </div>
  );
};

export default DropdownHook;
