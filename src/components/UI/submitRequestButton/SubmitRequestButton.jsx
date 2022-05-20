import React, { useContext } from 'react';
import './SubmitRequestButton.scss';
import feedback from '../../../images/header/feedback.svg';
import { useTranslation } from 'react-i18next';
import { PopupActive } from '../../../context/PopupActive';

const SubmitRequestButton = () => {
  const { t } = useTranslation();

  const { setMenuActive } = useContext(PopupActive);

  return (
    <button className={'feedback'} aria-label="leave feedback button" onClick={() => setMenuActive(true)}>
      <img src={feedback} alt="feedback img" aria-hidden="true" />
      <span>{t('submit_your_application')}</span>
    </button>
  );
};

export default SubmitRequestButton;
