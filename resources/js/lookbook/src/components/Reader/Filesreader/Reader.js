import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components'
import {
  DEFAULT_BOOK_NAME,
  DEFAULT_BOOK_PLACEHOLDER,
} from '../../../redux/reducers/files/filesReducer';

import { getBook, getStyles } from '../../../redux/thunks/thunks';
import Preloader from './Preloader/Preloader';
import ReaderControls from './ReaderControls/ReaderControls';
import s from './Reader.module.css'

const ReaderWindow = styled.div`
  margin-top: var(--controls-height);
  font-size:          ${props => props.fontSize };
  line-height:        ${props => props.lineHeight};
  background-color:   ${props => props.backgroundColor};
  color:              ${props => props.color};
`

const Reader = (props) => {
  const reader = useRef(null)
  const dispatch = useDispatch ()
  console.log('readerRender')
  const styles = useSelector (state => state.styles.styles)
  const book = useSelector (state => state.files.currentBook)
  const bookId = useSelector (state => state.files.currentBookId)
  const userId = useSelector (state => state.files.userId)
  useEffect (() => {
    dispatch (getStyles ())
    if (book === DEFAULT_BOOK_PLACEHOLDER && bookId !== DEFAULT_BOOK_NAME) {
      console.log('book id = ' + bookId)
      //dispatch (getBook (bookId))
    }
  },
  [props])
  return (
    <Route exact path="/reader">
        <ReaderWindow fontSize={styles['font-size']} lineHeight={styles['line-height']} backgroundColor={styles['background-color']}
          color={styles['color']}
          ref={reader} className={s.Reader} dangerouslySetInnerHTML={{ __html: book }}/>
        <ReaderControls />
        <Preloader />

    </Route>
  )
}
export default Reader
