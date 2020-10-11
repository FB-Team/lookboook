import { Route, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import React from 'react';
import Account from '../Account/Account';
import CredentialsDialog from './CredentialsDialog/CredentialsDialog';
import FileLoader from './FileLoader/FileLoader';
import Libs from '../Libs/Libs';
import s from './FileInput.module.css'


const FileInput = (props) => {
  const authPath = useSelector (state => state.accounts.authPath)
  return (
    <div className={s.FileInput}>
      <Account />
      <FileLoader />
      <CredentialsDialog/>
      <Libs />
    </div>
  )
}
export default FileInput
