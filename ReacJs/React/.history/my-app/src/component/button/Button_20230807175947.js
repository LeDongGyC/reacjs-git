import React from "react";
import "./Button.scss";
import "./Button.module.css"
const Button = (props) => {
  return <button className="button">{props.children}</button>;
};

export default Button;
