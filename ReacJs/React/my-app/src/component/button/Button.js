import React from "react";
import styles from "./Button.module.css"
const Button = (props) => {
  return <button className={`${styles.button} ${styles.buttonSecondary}`}>{props.children}</button>;
};

export default Button;
