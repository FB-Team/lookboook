import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import {
  addSelectedStyle,
} from '../../../../../redux/actions/content/stylesActions';
import { updateStyles } from '../../../../../redux/thunks/thunks';


const ControlsItem = (props) => {

  // ИНФА О ВЫБОРКЕ ОПЦИОНАЛЬНЫХ СТИЛЕЙ
  const dispatch =      useDispatch ()
  const styles =        useSelector (state => state.styles.styles)
  const values =        useSelector (state => state.styles.values[props.property])
  const login =         useSelector (state => state.accounts.login)
  const defaultValue =  styles[props.property]

  // ПРОВЕРКИ, ЧТО БЫ УБЕДИТЬСЯ ЧТО -
  // А) МЫ ПОЛУЧИЛИ ДЕЙСТВИТЕЛЬНЫЕ ДАННЫЕ
  // Б) ДЕФОЛТНОЕ ЗНАЧЕНИЕ ВХОДИТ В МАССИВ ОПЦИОНАЛЬНЫХ ЗНАЧЕНИЙ
  if (!values || !defaultValue || !login) {
    throw new Error (`ControlsItem: Invalid values provided!`)
  }
  if (!values.includes(defaultValue)) {
    alert (`ControlsItem: Warning, the defualt values provided does not belong to styles selection!`)
    dispatch (addSelectedStyle (props.property, defaultValue))
  }

  // СОЗДАЕМ МАССИВ СОСТОЯЩИЙ ИЗ НАБОРА ПАРАМЕТРОВБ КОТОРЫЕ ПОЛЬЗОВАТЕЛЬ СМОЖЕТ ПРИМЕНЯТЬ К СТИЛЯМ ГЛАВНОГО ОКНА
  let options = null
  options = values.map ((value, i) => {
      return <option key={i} value={value}>{value}</option>
  })
  function handleChange (e) {
    const propName = props.property
    const styleToSend = {styles: {}}
    styleToSend.styles[propName] = e.target.value
    dispatch (updateStyles (login, styleToSend))
  }

  // ЕСЛИ ДАННЫЕ НЕ ПРИШЛИ, ТО И РЕНДЕРИТЬ НИЧЕГО НЕ НУЖНО
  if (options) {
    return (
        <div>
          <label htmlFor={props.name}>{props.name}</label>
          <select name={props.name} defaultValue={defaultValue} onChange={handleChange}>
            {options}
          </select>
        </div>
    )
  } else return <div></div>
}
export default ControlsItem
