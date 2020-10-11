import React from 'react';
import Back from './Back/Back';
import ControlsItem from './ControlsItem/ControlsItem';
import s from './ReaderControls.module.css'

const ReaderControls = (props) => {
  return (
    <div className={s.ReaderControls}>
      <Back path='/'/>
      <div className={s.controlsWrapper}>
        <ControlsItem name="Шрифты"    property={'font-size'}/>
        <ControlsItem name="Интервал"  property={'line-height'}/>
        <ControlsItem name="Цвет"      property={'color'} />
        <ControlsItem name="Цвет фона" property={'background-color'}/>
      </div>
    </div>
  )
}
export default ReaderControls
