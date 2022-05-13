import React, { Suspense, useState } from "react";
import "./App.css";
import "../../styles/main.css";
import HomePage from "../../pages/HomePage/HomePage";
import "../../utils/i18n";
import "i18next";
import Loader from "../UI/loader/Loader";
import MyModal from "../UI/popupModal/MyModal";
import { ActiveBtn } from "../../context/activeBtn/ActiveBtn";
import { PopupActive } from "../../context/popupActive/PopupActive";
import { useTranslation } from "react-i18next";

function App() {
  // popup window
  const [menuActive, setMenuActive] = useState(false);

  // change language
  const { i18n } = useTranslation();
  const [activeBtn, setActiveBtn] = useState(
    i18n.language === "ru" ? true : false
  );

  return (
    <Suspense fallback={<Loader />}>
      <ActiveBtn.Provider value={{ activeBtn, setActiveBtn }}>
        <PopupActive.Provider value={{ menuActive, setMenuActive }}>
          <MyModal />
          <HomePage />
        </PopupActive.Provider>
      </ActiveBtn.Provider>
    </Suspense>
  );
}

export default App;
