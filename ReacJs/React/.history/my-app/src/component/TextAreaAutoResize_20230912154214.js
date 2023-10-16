import React from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = use


  return (
    <div className="p-5">
      <textarea
        className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-400 resize-none focus:border-blue-100"
        placeholder="Enter the content"
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
