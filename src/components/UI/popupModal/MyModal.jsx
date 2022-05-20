import React, { useContext } from 'react';
import { PopupActive } from '../../../context/PopupActive';
import Feedback from '../feedback/Feedback';
import './MyModal.scss';
import close from '../../../images/popup/close.svg';
import gambClose from '../../../images/header/mobile/close.png';

const MyModal = () => {
  const { menuActive, setMenuActive } = useContext(PopupActive);

  return (
    <div className={`${menuActive ? 'modal active' : 'modal'}`} onClick={() => setMenuActive(false)}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <button className="content__close-btn" onClick={() => setMenuActive(false)}>
          <img src={close} alt="close modal window" />
        </button>

        <div className="popup-menu-header">
          <button onClick={() => setMenuActive(false)}>
            <img src={gambClose} alt="button close window" />
          </button>
        </div>

        <Feedback />
      </div>
    </div>
  );
};

export default MyModal;
