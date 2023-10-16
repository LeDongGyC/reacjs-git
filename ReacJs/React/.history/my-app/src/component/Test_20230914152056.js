import React, { useEffect, useState } from "react";

const Test = () => {
  const [values, setValues] = useState("demo");
  useEffect(() => {
    if(values!==""){
        console.log("ok");
    } else {
        console.log("not ok ");
    }
  },[values]);
  return (
    <div>
      <input
        type="text"
        className="p-5 w-[300px] border rounded-lg border-gray-500"
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      {values}
    </div>
  );
};

export default Test;
