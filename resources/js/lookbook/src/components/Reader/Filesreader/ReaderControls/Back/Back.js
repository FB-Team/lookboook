import 'bootstrap/dist/css/bootstrap.css';

import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import React from 'react';

import s from './Back.module.css'

const Back = (props) => {
const isLoaded = useSelector (state => state.files.bookIsLoaded);
if (isLoaded) {
    return (
        <NavLink to={props.path} className={s.Back}><button className="btn btn-secondary">Назад</button></NavLink>
    )
  }else return <NavLink to={props.path} className={s.Back}><button className="btn btn-secondary" disabled>Назад</button></NavLink>
}
export default Back
