import { Route, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import FileLoader from './FileLoader/FileLoader';
import Libs from '../Libs/Libs';
import s from './FileInput.module.css'


const FileInput = (props) => {
  const dispatch =      useDispatch ()
  const authPath = useSelector (state => state.accounts.authPath)
  return (
    <div className={s.FileInput}>
      <Route exact path="/">
      <FileLoader />
      <Libs />
      </Route>
    </div>
  )
}
export default FileInput
