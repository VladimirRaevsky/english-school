import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import MyInput from '../input/MyInput';
import './Feedback.scss';
import MyTextarea from '../textarea/MyTextarea';
import MyButton from '../myButton/MyButton';
import '../../../styles/main.scss';

import { PopupActive } from '../../../context/PopupActive';

const Feedback = () => {
  const [t] = useTranslation();

  // popup window
  const { setMenuActive } = useContext(PopupActive);

  return (
    <div className="wrapper">
      <div className="inner">
        <span className="inner-title">{t('contact_us.title')}</span>

        <p className="inner-descr">{t('contact_us.descr')}</p>

        <form className="inner-form">
          <MyInput clName={'input-feedback'} type={'text'} placeholder={t('contact_us.your_name')} />

          <MyInput clName={'input-feedback'} type={'number'} placeholder={'+998 (___) __ - __ - __'} />

          <MyTextarea placeholder={t('additional_comments')} />

          <div
            style={{
              position: 'absolute',
              bottom: -75,
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
            <MyButton text={t('send')} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
