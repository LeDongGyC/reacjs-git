import React from "react";

const LoadingSkeleton = (props) => {
  return <div className="skeleton " style={{
    height:props.height
  }
  }></div>;
};

export default LoadingSkeleton;
