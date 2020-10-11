import { useSelector } from 'react-redux';
import React from 'react';

import {
  DEFAULT_BOOK_PLACEHOLDER,
} from '../../../../redux/reducers/files/filesReducer';


const Preloader = (props) => {
  const bookIsLoaded = useSelector ( state => state.files.bookIsLoaded)
  if (!bookIsLoaded){
    return (
      <div><h1>Загрузка...</h1></div>
    )
  }else  {
    return <p></p>
  }
}
export default Preloader
