import React from 'react';
import './Header.scss';
import logo from '../../images/header/logo.svg';
import Socials from '../socials/Socials';
import ButtonsSwitchingLang from '../UI/buttonsSwitchingLang/ButtonsSwitchingLang';
import SubmitRequestButton from '../UI/submitRequestButton/SubmitRequestButton';
import MobileHeader from '../mobileHeader/MobileHeader';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={'header'}>
      {/* * * * * COMPONENT Mobile Header * * * * */}
      <MobileHeader />
      {/* * header-container * */}
      <div className="inner-container header-container">
        <div className="header__logo">
          <img src={logo} alt="logo img" aria-label="logo img" />
        </div>
        {/* * * * * COMPONENT Socials * * * * */}
        <Socials />
        <ul className="header__list">
          <li>
            <a href="/">{t('nav_link.home')}</a>
          </li>
          <li>
            <a href="/">{t('nav_link.about')}</a>
          </li>
          <li>
            <a href="/">{t('nav_link.services')}</a>
          </li>
          <li>
            <a href="/">{t('nav_link.universities')}</a>
          </li>
          <li>
            <a href="/">{t('nav_link.students')}</a>
          </li>
          <li>
            <a href="/">{t('nav_link.news')}</a>
          </li>
          <li>
            <a href="/">{t('nav_link.contacts')}</a>
          </li>
        </ul>
        {/* * * * * COMPONENT Buttons Switching Lang * * * * */}
        <ButtonsSwitchingLang />
        {/* * * * * COMPONENT Submit Request Button * * * * */}
        <SubmitRequestButton />
      </div>
    </header>
  );
};

export default Header;
