import React, { Suspense, useState } from 'react';
import './App.css';
import '../../styles/main.scss';
import HomePage from '../../pages/HomePage/HomePage';
import '../../utils/i18n';
import 'i18next';
import Loader from '../UI/loader/Loader';
import MyModal from '../UI/popupModal/MyModal';
import { ActiveBtn } from '../../context/ActiveBtn';
import { PopupActive } from '../../context/PopupActive';
import { useTranslation } from 'react-i18next';
import { openMobileMenu } from '../../context/MobileMenu';

function App() {
  // mobile menu
  const [openMenu, setOpenMenu] = useState(false);

  // popup window
  const [menuActive, setMenuActive] = useState(false);

  // //open mobile menu close popup window
  // menuActive && setOpenMenu(false);
  // //open popup window close mobile menu
  // openMenu && setMenuActive(false);

  // change language
  const { i18n } = useTranslation();

  const [activeBtn, setActiveBtn] = useState(i18n.language === 'ru' ? true : false);

  return (
    <Suspense fallback={<Loader />}>
      <ActiveBtn.Provider value={{ activeBtn, setActiveBtn }}>
        <PopupActive.Provider value={{ menuActive, setMenuActive }}>
          <openMobileMenu.Provider value={{ openMenu, setOpenMenu }}>
            <MyModal />
            <HomePage />
          </openMobileMenu.Provider>
        </PopupActive.Provider>
      </ActiveBtn.Provider>
    </Suspense>
  );
}

export default App;
