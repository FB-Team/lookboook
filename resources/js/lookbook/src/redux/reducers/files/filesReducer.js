import {
  ADD_BOOK_TO_LIB,
  CLEAR_CURRENT_BOOK,
  SETLIBS,
  SET_BOOKS_AND_LIBS,
  SET_BOOK_FLAG,
  SET_CURRENT_BOOK,
  SET_USER_ID
} from '../../actions/files/filesActions';

const defaultLib = null
export const DEFAULT_BOOK_PLACEHOLDER = '<p></p>'
export const DEFAULT_BOOK_NAME = 'Empty'
let bookName = localStorage.getItem ('currentBook')
if (!bookName) bookName = DEFAULT_BOOK_NAME
const initialState = {
  libs: [],
  currentBook:     DEFAULT_BOOK_PLACEHOLDER,
  currentBookName: bookName,
  currentBookId: null,
  bookIsLoaded: false,
  userId: 1
}
const filesReducer = (state = initialState, action) => {
  switch (action.type){

    case SETLIBS:
    if (action.libs){
      if(action.libs) {
        return { ...state, libs: [action.libs] }
      }
      else return state
    }
    case ADD_BOOK_TO_LIB:
    try {
    //  checkForTemplateValidity(action.bookData, libraryTemplate.default[0])
      if (!state.libs.includes(action.bookData)){
        return   { ...state, libs:[...state.libs, action.bookData] }
      }else return state
    } catch (e) {
      console.log ('Network error = ' + e)
      return state
    }
    case SET_BOOKS_AND_LIBS:
    return { libs: action.data, ...state }

    case SET_CURRENT_BOOK:
      localStorage.setItem ('currentBook', action.id)
      return { ...state, currentBook: action.book, currentBookName: action.bookName, currentBookId: action.id, bookIsLoaded: true}
    case SET_BOOK_FLAG:
    return {...state, bookIsLoaded: action.bookState}

    case CLEAR_CURRENT_BOOK:
    return {...state, currentBook: DEFAULT_BOOK_PLACEHOLDER, bookIsLoaded: false}
    case SET_USER_ID: 
    return {...state, userId: action.id}
    default: return state
  }
}
export default filesReducer

const libraryTemplate = {
  default: [{
    name: 'bookname',
    mimeType: 'mimeType',
    size: 'size'
  }
  ]
}
function checkForTemplateValidity (obj, template) {
  if (!obj || !template) {
    throw new Error('checkForTemplateValidity: Either of arguments is invalid')
  }
  const targetKeys = Object.keys(obj)
  const templateKeys = Object.keys(template)
  for (let i = 0; i < templateKeys.length; i++) {
    if (targetKeys[i] !== templateKeys[i]) {
      throw new Error ('filesReducer error: Wrong format of the key! Required:' + templateKeys[i] + ', got: ' + targetKeys[i])
    }
  }
  return true
}
