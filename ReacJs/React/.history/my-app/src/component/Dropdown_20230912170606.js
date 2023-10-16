import React from "react";

const Dropdown = () => {
  return (
    <div>
      <div className="relative w-full max-w-[400px]">
        <div className="p-5 border border-gray-500 rounded-lg w-full cursor-pointer">
          Selected
        </div>
        <div className="border border-gray-500 rounded-lg absolute top-full left-0 w-full bg-white">
            <div className="p-5 cursor-pointer bo">JS</div>
            <div className="p-5 cursor-pointer">ReacJS</div>
            <div className="p-5 cursor-pointer">VueJS</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
