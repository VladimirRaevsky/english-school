import React from "react";
import "./MyButton.scss";

const MyButton = ({ text }) => {
  return <button className="my-button">{text}</button>;
};

export default MyButton;
