import { useSelector, useDispatch  } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllLibs } from '../../../redux/thunks/thunks';
import Book from './Book/Book';
import s from './Libs.module.css'
import Lib from './Lib'

const Libs = (props) => {
  const libs = useSelector (state => state.files.libs);
  const login = useSelector (state => state.accounts.login);
  const dispatch = useDispatch ();
  useEffect (()=> { dispatch(getAllLibs(login)) }, [props]);
  let libsToDisplay = []
  console.log(libs + ', length = ' + libs.length)
  if (libs.length > 0){
    console.log(libs)
    libsToDisplay = Object.keys(libs).map ((key ,i) => {return <Lib key={i} books={libs[key]['root']['books']} id={key}/>})
  }
  return (
    <div className={s.libsContainer}>{libsToDisplay}</div>
  )
}

export default Libs
