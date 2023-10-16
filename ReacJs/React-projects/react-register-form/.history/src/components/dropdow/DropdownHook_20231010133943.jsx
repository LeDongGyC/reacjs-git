import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useWatch } from "react-hook-form";
const data = [
  {
    id: 1,
    value: "frontend",
    text: "Front end",
  },
  {
    id: 2,
    value: "backtend",
    text: "Back end",
  },
  {
    id: 3,
    value: "fullstack",
    text: "Full stack",
  },
];

const DropdownHook = ({ control, setValue, name }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const dropdownValue = useWatch({
    control,
    name: "job",
    defaultValue: "", // default value before the render
  });
  const handleClick = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  const [label, setLabel] = React.useState("Select your job");
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {data.map(item =>{
          <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClick}
          data-value="frontend"
        >
          Front End
        </div>
        })}
        {/* <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClick}
          data-value="frontend"
        >
          Front End
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClick}
          data-value="backend"
        >
          Back End
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClick}
          data-value="Fullstack"
        >
          Fullstack
        </div> */}
      </div>
    </div>
  );
};

export default DropdownHook;
