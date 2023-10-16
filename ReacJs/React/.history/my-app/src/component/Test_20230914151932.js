import React, { useEffect, useState } from "react";

const Test = () => {
  const [values, setValues] = useState("demo");
  useEffect(() => {});
  return (
    <div>
      <input
        type="text"
        className="p-5 w-[300px] border rounded-lg border-gray-500"
        value={values}
        onChange={(e) => setValues( e.targer.value)}
      />
    </div>
  );
};

export default Test;
