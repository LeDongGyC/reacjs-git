import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownHook = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative" ref={nodeRef}>
      <div className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer" onClick={() => setShow(!show)}>
        <span>Select your job</span>
      </div>
      <div>
        <option value="" className="p-5">
          FE
        </option>
        <option value="" className="p-5">
          BE
        </option>
        <option value="" className="p-5">
          Fullstack
        </option>
      </div>
    </div>
  );
};

export default DropdownHook;
