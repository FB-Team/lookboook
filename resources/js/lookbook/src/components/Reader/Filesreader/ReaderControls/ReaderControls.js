import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Back from './Back/Back';
import ControlsItem from './ControlsItem/ControlsItem';
import s from './ReaderControls.module.css'
import {getStyles, updateStyles} from "../../../../redux/thunks/thunks";

const ReaderControls = (props) => {

    const dispatch = useDispatch()
    const styles = useSelector (state => state.styles.styles)
    useEffect(() => {
        dispatch(getStyles())
    }, [])
    return (
    <div className={s.ReaderControls}>
      <Back path='/'/>
      <div className={s.controlsWrapper}>
        <ControlsItem name="font-size" title="Шрифты"   property={styles['font-size']} />
        <ControlsItem name="line-height"  title="Интервал"  property={styles['line-height']} />
        <ControlsItem name="color"  title="Цвет"      property={styles['color']} />
        <ControlsItem name="background-color"  title="Цвет фона" property={styles['background-color']} />
      </div>
    </div>
  )
}
export default ReaderControls
