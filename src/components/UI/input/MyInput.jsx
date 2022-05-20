import React from 'react';
import './MyInput.scss';
import '../../../styles/main.scss';

const MyInput = ({ clName = '', type, placeholder }) => {
  return <input className={`${'input'} ${clName}`} type={type} placeholder={placeholder} />;
};

export default MyInput;
