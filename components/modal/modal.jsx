import React from 'react';
import Image from 'next/image';
import TelegramImg from '../../public/assets/telegram-img.jpg';
import s from '../../styles/modal.module.css';
const Modal = ({ isOpen, onClose, children }) => {
  //   if (!isOpen) return null;

  return (
    <div className={s.wrapModal} onClick={onClose}>
      <Image src={TelegramImg} alt="img" width={350} />
    </div>
  );
};

export default Modal;
