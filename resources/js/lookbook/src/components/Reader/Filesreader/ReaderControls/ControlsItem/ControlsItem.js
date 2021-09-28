import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {
  addSelectedStyle,
} from '../../../../../redux/actions/content/stylesActions';
import { updateStyles } from '../../../../../redux/thunks/thunks';


export default (props) => {

  // ИНФА О ВЫБОРКЕ ОПЦИОНАЛЬНЫХ СТИЛЕЙ
  const dispatch =      useDispatch ()
  const userId =         useSelector (state => state.files.userId)
  const defaultValue =  props.property
  const defaultName =  props.name
  const defaultTitle =  props.title

  const values =  useSelector (state => state.styles.values)
  const styles =  useSelector (state => state.styles.styles)

  // ПРОВЕРКИ, ЧТО БЫ УБЕДИТЬСЯ ЧТО -
  // А) МЫ ПОЛУЧИЛИ ДЕЙСТВИТЕЛЬНЫЕ ДАННЫЕ
  // Б) ДЕФОЛТНОЕ ЗНАЧЕНИЕ ВХОДИТ В МАССИВ ОПЦИОНАЛЬНЫХ ЗНАЧЕНИЙ
  if (!values || !defaultValue) {
    throw new Error (`ControlsItem: Invalid values provided!`)
  }
  if (!values[defaultName].includes(defaultValue)) {
    alert (`ControlsItem: Warning, the default values provided does not belong to styles selection!`)
    dispatch (addSelectedStyle (defaultName, defaultValue))
  }

  // СОЗДАЕМ МАССИВ СОСТОЯЩИЙ ИЗ НАБОРА ПАРАМЕТРОВБ КОТОРЫЕ ПОЛЬЗОВАТЕЛЬ СМОЖЕТ ПРИМЕНЯТЬ К СТИЛЯМ ГЛАВНОГО ОКНА
  let options =
      values[defaultName].map ((value, i) => {
          return  <option key={i} value={value}>{value}</option>;
      })

  function handleChange (e) {
      styles[defaultName] = e.target.value
      console.log(styles);
      dispatch (updateStyles (styles))
  }

  if (options) {
    return (
        <div>
          <label htmlFor={props.name}>{defaultTitle}</label>
          <select name={props.name} value={defaultValue} onChange={handleChange}>
            {options}
          </select>
        </div>
    )
  } else return <div></div>
}
