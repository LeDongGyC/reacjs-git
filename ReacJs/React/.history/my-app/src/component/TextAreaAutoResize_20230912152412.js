import React from "react";

const TextAreaAutoResize = () => {
  return (
    <div className="p-5">
      <textarea
        className="w-full max-w-[400px] p-5 rounded-lg border border-gray-400 resize-none focus:"
        placeholder="Enter the content"
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
