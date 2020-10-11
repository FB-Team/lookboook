import 'bootstrap/dist/css/bootstrap.css';
import { clearSelected } from '../../../../redux/actions/files/selectedActions';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import s from './SelectedFiles.module.css'


const SelectedFiles = (props) => {
  const files = useSelector (state => state.selectedFiles)
  const dispatch = useDispatch ()
  let filesToDisplay = []
  if (files.files.length >= 1){

     filesToDisplay = files.files.map ((file, i) => {
       const sizeInKBites = Math.ceil(file.size  / 1024)
      return (<div key={i} className={s.item}>
        <div>{file.name}</div>
        <div className={s.size}>{sizeInKBites} Kb</div>
        <button id={i} onClick={handleClick}className="btn btn-danger"></button>
      </div>)
    })
  }
  return (
      <div className={s.SelectedFiles}>
      {filesToDisplay}
      </div>
  )
  function handleClick (e) {
    if (e.target.id){
      e.preventDefault()
      dispatch (clearSelected (Number(e.target.id)))
    }
    else{
      
    }
  }
}
export default SelectedFiles
