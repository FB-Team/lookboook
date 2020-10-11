import {
  ADD_SELECTED,
  CLEAR_SELECTED_ALL,
  SET_URL,
  CLEAR_SELECTED
} from '../../actions/files/selectedActions';

const initialState = {
  files: [],
  url: null
}
const selectedFilesReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_URL:
    return {...state, url: action.url}
    case ADD_SELECTED:
    
    return {...state, files: [...state.files, action.file]}
    case CLEAR_SELECTED_ALL:
    return {...state, files: []}
    case CLEAR_SELECTED:
    return {...state, files: state.files.filter((file, id) => id !== action.id)}
    default: return state
  }
}
export default selectedFilesReducer
