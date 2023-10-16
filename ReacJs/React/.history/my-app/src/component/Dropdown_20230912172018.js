import React, { useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <div className="relative w-full max-w-[400px]">
        <div className="p-5 border border-gray-500 rounded-lg w-full cursor-pointer" onClick={setShowDropdown()}>
          Selected
        </div>
        {showDropdown && <div className="border border-gray-500 rounded-lg absolute top-full left-0 w-full bg-white">
          <div className="p-5 cursor-pointer border-b border-b-blue-500">
            JS
          </div>
          <div className="p-5 cursor-pointer border-b border-b-blue-500">
            ReacJS
          </div>
          <div className="p-5 cursor-pointer">VueJS</div>
        </div>}
      </div>
    </div>
  );
};

export default Dropdown;
