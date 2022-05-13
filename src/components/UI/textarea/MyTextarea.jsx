import React from "react";
import "./MyTextarea.scss";

const MyTextarea = ({ placeholder }) => {
  return (
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder={placeholder}
    ></textarea>
  );
};

export default MyTextarea;
