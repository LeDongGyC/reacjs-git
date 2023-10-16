import React, { useState } from "react";
import "./ToggleStyle.css";
function Toggle() {
  return (
    <div>
      <div className="toggle">
        <div className="spinner"></div>
      </div>
      <div className="toggle-control">
        <div className="toggle-on"></div>
        <div className="toggle-off"></div>
      </div>
    </div>
  );
}
export default Toggle;
