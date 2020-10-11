import React from 'react';
import s from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={s.Modal}>
      <input type="text" placeholder="Введите ваш логин"/>
      <input type="text"/>
      <div>
        <NavLink></NavLink>
        <NavLink></NavLink>
      </div>
    </div>
  )
}
export default Modal
