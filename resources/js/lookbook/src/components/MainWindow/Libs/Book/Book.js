import 'bootstrap/dist/css/bootstrap.css';

import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import React ,{ useState } from 'react';

import { deleteBook, getBook } from '../../../../redux/thunks/thunks';
import docxImage from '../../../../assets/docx.png'
import fb2Image from '../../../../assets/fb2.png'
import image from '../../../../assets/bookLogo.png'
import s from './Book.module.css'
import trash from '../../../../assets/trash.png'
import txtImage from '../../../../assets/txt.png'


function getImage (type) {
  switch (type) {
    case 'text/plain':
      return  txtImage
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return  docxImage
    case 'application/octet-stream':
    return    fb2Image
    default: return image
  }
}
const Book = (props) => {
  const dispatch =        useDispatch()
  const currentBookName = useSelector(state => state.files.currentBookName)
  const isLoaded =       useSelector (state => state.files.bookIsLoaded)
  const login =           useSelector (state => state.accounts.login)
  const [trashVisible, setTrashVisibility] =    useState (false)
  let sizeInKBites = ''

  function handleClick (event) {
      dispatch( getBook (props.book.id))
  }
  function deleteBookHandler (event) {
    dispatch ( deleteBook (props.book.id))
  }
  if (props.book) {
    if (props.book.size) {
      sizeInKBites = props.book.size / 1024
      sizeInKBites = Math.ceil(sizeInKBites)
    }
    function mouseenter (e) {
      setTrashVisibility (true)
    }
    function mouseleave (e) {
      setTrashVisibility (false)
    }
    return (
      <div className="col-3 container__book" onMouseEnter={mouseenter} onMouseLeave={mouseleave}>
      {trashVisible ? <div className="btn__trash__wrapper" onClick={deleteBookHandler}><button className={'btn__trash' + ' ' +'btn btn-danger'} ><img src={trash} alt=""/></button></div>
    : <div></div>}
        <NavLink to='/reader' className={s.link} onClick={handleClick}>
          <div className={s.Book}>

            <div className="book__img">
              <div><img src={getImage(props.book.mimeType)} alt="Картинка в соответствии с типом данных"/></div>
            </div>
            <div>
              <span className={s.name}>{props.book.name}</span>
              (<span className={s.size}>{sizeInKBites}Kb</span>)
            </div>
          </div>
        </NavLink>
      </div>
    )
  } else {
    return <div></div>
  }
}
export default Book
