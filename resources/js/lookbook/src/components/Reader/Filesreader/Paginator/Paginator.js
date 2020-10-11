import React, { useState } from 'react';
import s from './Paginator.module.css'

const Paginator = (props) => {
  //const [pageOffset, setPageOffset] = useState(1500)
  const [currentOffset, setCurrentOffset] = useState (props.offset)
  function hadnleRightScroll (event) {
    window.scrollTo (0, currentOffset)
    setCurrentOffset(currentOffset + props.offset)
  }
  function hadnleLeftScroll (event) {
    if (currentOffset >= 0){
      const offset = currentOffset - props.offset
      window.scrollTo (0, offset)
      setCurrentOffset(currentOffset - props.offset)
    }
  }
  return (
      <div className={s.Paginator}>
        <button className={s.paginationButton} onClick={hadnleRightScroll} data-type="right">right</button>
        <button className={s.paginationButton} onClick={hadnleLeftScroll} data-type="left">left</button>
      </div>

  )
}
export default Paginator
