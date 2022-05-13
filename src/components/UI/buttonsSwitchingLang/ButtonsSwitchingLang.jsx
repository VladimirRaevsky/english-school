import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import "./Button.scss";
import { ActiveBtn } from "../../../context/activeBtn/ActiveBtn";

const ButtonsSwitchingLang = () => {
  const { i18n } = useTranslation();

  const { activeBtn, setActiveBtn } = useContext(ActiveBtn);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={"button-box"}>
      <button
        onClick={() => {
          setActiveBtn(!activeBtn);
          changeLanguage("ru");
        }}
        className={`${"button"} ${
          activeBtn ? "active" : ""
        }`}
      >
        РУС
      </button>
      <button
        onClick={() => {
          setActiveBtn(!activeBtn);
          changeLanguage("uk");
        }}
        className={`${"button"} ${
          activeBtn ? "" : "active"
        }`}
      >
        UK
      </button>
    </div>
  );
};

export default ButtonsSwitchingLang;
