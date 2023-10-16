import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOut(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOut);
    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);
  return (
    <div>
      <div className="relative w-full max-w-[400px]" ref={dropdownRef}>
        <div
          className="p-5 border border-gray-500 rounded-lg w-full cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Selected
        </div>
        {showDropdown && (
          <div className="border border-gray-500 rounded-lg absolute top-full left-0 w-full bg-white">
            <div className="p-5 cursor-pointer border-b border-b-blue-500">
              JS
            </div>
            <div className="p-5 cursor-pointer border-b border-b-blue-500">
              ReacJS
            </div>
            <div className="p-5 cursor-pointer">VueJS</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
