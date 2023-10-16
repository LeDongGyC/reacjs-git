import React, { useState } from "react";
import "./ToggleStyle.css";
function Toggle() {
  return (
    <div>
      <div className="toggle">
        <div className="spinner"></div>
      </div>
      <div className="toggle-control">
        <div className="toggle-on" onClick={}>On</div>
        <div className="toggle-off">Off</div>
      </div>
    </div>
  );
}
export default Toggle;
