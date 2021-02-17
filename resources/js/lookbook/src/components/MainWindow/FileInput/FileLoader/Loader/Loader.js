import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import React, { useRef }  from 'react';
import {
  addSelectedFile,
  setUrl
} from '../../../../../redux/actions/files/selectedActions';
import fileInput from '../../FileInput';
import s from './Loader.module.css'

const Loader= (props) => {
  const fileInput = useRef(null)
  const selectedFiles = useRef(null)
  const dispatch = useDispatch()
  function handleSelection (event) {

    const currentFile = fileInput.current.files[fileInput.current.files.length - 1]
    if (currentFile)
      dispatch( addSelectedFile (currentFile) )
  }
  function handleFileLoaderClick (event) {
    event.preventDefault()
    fileInput.current.click()
  }
  function handleChange (e) {
    dispatch (setUrl (e.target.value))
  }
  return (
    <div className={s.Loader}>
      <div>
      {<input className={s.selectedFiles} ref={fileInput}type="file" onChange={handleSelection} className={s.input} name="file"  multiple></input>}
        <input className={s.urlLoader + ' ' + 'form-control'} onChange={handleChange} type="text" placeholder="Загрузить файл по ссылке"/>
        <div className={s.filesystemSave}>
          <div className="col-8 mx-auto">
            <button onClick={handleFileLoaderClick} className="btn btn-secondary">Загрузить с компьютера</button>            
          </div>
          <div className="col-6 mx-auto">
            <input type="submit" value="Сохранить" className="btn btn-primary"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Loader
