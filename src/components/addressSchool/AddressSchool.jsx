import React from "react";
import hoursIcon from "../../images/header/mobile/hours.svg";
import cityIcon from "../../images/header/mobile/locale.svg";
import "./AddressSchool.scss";
import { useTranslation } from "react-i18next";

const AddressSchool = () => {
  const { t } = useTranslation();

  return (
    <div className="address-wrapper">
      <div className={"hours"}>
        <img src={hoursIcon} alt="hours icon" className="hours-icon" />
        <span>Пн-Пт 9:00 - 18:00</span>
      </div>
      <div className={"city"}>
        <img src={cityIcon} alt="city icon" className="city-icon" />
        <span>
          {t("city")}
          <p>
            {t("street")} ({t("office")} 24)
          </p>
        </span>
      </div>
    </div>
  );
};

export default AddressSchool;
