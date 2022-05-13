import React from "react";
import inst from "../../images/header/inst.svg";
import fb from "../../images/header/fb.svg";
import youtube from "../../images/header/youtube.svg";
import "./Socials.scss";

const Socials = () => {
  return (
    <div className={"socials-box"}>
      <img src={inst} alt="instagram" aria-label="instagram img" />
      <img src={fb} alt="facebook" aria-label="facebook img" />
      <img src={youtube} alt="youtube img" aria-label="youtube img" />
    </div>
  );
};

export default Socials;
