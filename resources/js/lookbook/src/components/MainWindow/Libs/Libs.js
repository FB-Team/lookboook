import { useSelector, useDispatch  } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllLibs } from '../../../redux/thunks/thunks';
import Book from './Book/Book';
import s from './Libs.module.css'

const Libs = (props) => {
  const libs = useSelector (state => state.files.libs);
  const login = useSelector (state => state.accounts.login);
  const dispatch = useDispatch ();
  useEffect (()=> { dispatch(getAllLibs(login)) }, [props]);
  let libsToDisplay = []
  if (libs){
    libsToDisplay = Object.keys(libs).map ((key ,i) => {return <Book key={i} book={libs[key]} id={key}/>})
  }
  return (
    <div className={s.libsContainer}>{libsToDisplay}</div>
  )
}

export default Libs
