import React, { useState, useContext } from 'react';
import Socials from '../socials/Socials';
import './MobileHeader.scss';
import logo from '../../images/header/mobile/logo-mobile.svg';
import gamb from '../../images/header/mobile/gamb.svg';
import close from '../../images/header/mobile/close.png';
import ButtonsSwitchingLang from '../UI/buttonsSwitchingLang/ButtonsSwitchingLang';
import SubmitRequestButton from '../UI/submitRequestButton/SubmitRequestButton';
import AddressSchool from '../addressSchool/AddressSchool';
import { useTranslation } from 'react-i18next';
import { openMobileMenu } from '../../context/MobileMenu';

const MobileHeader = () => {
  const { openMenu, setOpenMenu } = useContext(openMobileMenu);

  const { t } = useTranslation();

  return (
    <>
      <header className={`header-mobile ${openMenu ? 'header-mobile__bg' : ''}`}>
        {/* * header-mobile__container * */}
        <div className="header-mobile__container">
          {/* * * * * COMPONENT Socials * * * * */}
          <Socials />
          {/* * header-mobile__logo * */}
          <div className="header-mobile__logo">
            <img src={logo} alt="mobile logo" />
          </div>
          <div className="header-mobile__gamburger" onClick={() => setOpenMenu(!openMenu)}>
            <img src={openMenu ? close : gamb} alt="menu button" />
          </div>
        </div>
      </header>
      {/* * mobile-wrapper * */}
      <div onClick={() => setOpenMenu(false)} className={`mobile-wrapper ${openMenu ? 'active' : ''}`}>
        <div className="mobile-container" onClick={(e) => e.stopPropagation()}>
          {/* * * * * COMPONENT Buttons Switching Lang * * * * */}
          <ButtonsSwitchingLang />
          {/* * mobile-nav * */}
          <nav className="mobile-nav">
            <ul className="mobile-nav__list">
              <li className="mobile-nav__item">
                <a href="/" className={'mobile-nav__link'}>
                  {t('nav_link.home')}
                </a>
              </li>
              <li className="mobile-nav__item">
                <a href="/" className="mobile-nav__link">
                  {t('nav_link.about')}
                </a>
              </li>
              <li className="mobile-nav__item">
                <a href="/" className="mobile-nav__link">
                  {t('nav_link.services')}
                </a>
              </li>
              <li className="mobile-nav__item">
                <a href="/" className="mobile-nav__link">
                  {t('nav_link.universities')}
                </a>
              </li>
              <li className="mobile-nav__item">
                <a href="/" className="mobile-nav__link">
                  {t('nav_link.students')}
                </a>
              </li>
              <li className="mobile-nav__item">
                <a href="/" className="mobile-nav__link">
                  {t('nav_link.news')}
                </a>
              </li>
              <li className="mobile-nav__item">
                <a href="/" className="mobile-nav__link">
                  {t('nav_link.contacts')}
                </a>
              </li>
            </ul>
          </nav>
          {/* * * * * COMPONENT Submit Request Button * * * * */}
          <SubmitRequestButton />
          {/* * * * * COMPONENT Address School * * * * */}
          <AddressSchool />
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
