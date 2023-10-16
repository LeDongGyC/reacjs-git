import React from "react";
import "./Button.scss";
import "./"
const Button = (props) => {
  return <button className="button">{props.children}</button>;
};

export default Button;
