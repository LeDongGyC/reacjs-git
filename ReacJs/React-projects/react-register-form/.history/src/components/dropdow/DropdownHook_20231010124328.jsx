import React from "react";

const DropdownHook = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative" ref={nodeRef}>
      <div className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer">
        <span>Select your job</span>
      </div>
      <div className="">
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
