import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { putBookByUrl, putBooks } from '../../../../redux/thunks/thunks';
import Loader from './Loader/Loader'
import SelectedFiles from './SelectedFiles';
import s from './FileLoader.module.css'

export const FileLoader = (props) => {
  const files = useSelector   (state => state.selectedFiles.files)
  const fileUrl = useSelector (state => state.selectedFiles.url)
  const login = useSelector   (state => state.accounts.login)
  const library = useSelector (state => state.files.libs)
  const dispatch = useDispatch()
  function handleSubmit (event) {
    event.preventDefault()
    const data = new FormData ()
    files.map ( file => {
      data.append(file.name, file, file.name)
    })
    dispatch(putBooks(data, true))
    if  (fileUrl) {
      dispatch (putBookByUrl (fileUrl))
    }
  }

  return (
      <div className={s.FileLoader}>
        <form onSubmit={handleSubmit}>
          <Loader/>
          <SelectedFiles />
        </form>
      </div>
  )
}
export default FileLoader
