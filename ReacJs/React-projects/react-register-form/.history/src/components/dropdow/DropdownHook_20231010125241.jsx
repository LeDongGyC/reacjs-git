import React from "react";

const DropdownHook = () => {
  const { show, setShow, nodeRef } = import { useEffect, useRef } from "react";
  
  export default function useClickOutSide(callback?: () => void) {
    const nodeRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      function handleClickOutSide(this: Document, ev: MouseEvent) {
        if (nodeRef.current && !nodeRef.current.contains(ev.target as Node)) {
          callback?.();
        }
      }
      document.addEventListener("click", handleClickOutSide);
      return () => {
        document.removeEventListener("click", handleClickOutSide);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
      nodeRef,
    };
  }
  kOutSide();
  return (
    <div className="relative" ref={nodeRef}>
      <div className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer">
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
