import { accountsAPI } from '../../api/accountsAPI/accountsAPI';
import {
  clearCurrentBook,
  setCurrentBook,
  setLibs,
} from '../actions/files/filesActions';
import { clearSelectedAll } from '../actions/files/selectedActions';
import { filesAPI } from '../../api/filesAPI/filesAPI';
import { setCredentials } from '../actions/accounts/accountActions';
import { setStyles } from '../actions/content/stylesActions';
import { stylesAPI } from '../../api/stylesAPI/stylesAPI';


export const getAllLibs = () => async (dispatch) => {
  try {
    let response = await filesAPI.getLibs()
    dispatch (setLibs (response.libs))
  } catch (e) {
    alert ('Cannot load the libs! Message = ' + e)
  }
}

export const putBooks = ( books) => async (dispatch) => {
  try {
    let response = await filesAPI.putBooks( books)
    dispatch(setCurrentBook(response.content))
    dispatch(setLibs(response.libsTree))
    dispatch(clearSelectedAll())
  } catch (e) {
    alert ('Cannot put books to the server! Message = ' + e)
  }
}
export const putBookByUrl = ( book) => async (dispatch) => {
  try {
    let response = await filesAPI.putBookByUrl( book)
    dispatch(setCurrentBook(response.content))
    dispatch(setLibs(response.libsTree))
    dispatch(clearSelectedAll())
  } catch (e) {
    alert ('Cannot add book by URL! Message = ' + e)
  }
}
export const putLibs = (libs, books) => async (dispatch) => {
  try {
    let response = await filesAPI.putLibs ({libs, books})
  } catch (e) {
    alert ('Cannot put the libs! Message = ' + e)
  }
}
export const getBook = ( id) => async (dispatch) => {
  try {
    dispatch (clearCurrentBook())
    let response = await filesAPI.getBook (id)
    dispatch(setCurrentBook(response, 'response.meta.name', id))
    return response.content
  } catch (e) {
    alert ('Cannot load a book! Message = ' + e)
  }
}
export const getStyles = () => async (dispatch) => {
  try {
    let response =  await stylesAPI.getStyles ()
    let styles = response.styles
    if (typeof styles == 'string') {
      styles = JSON.parse (styles)
    }
    dispatch (setStyles(styles))
    return styles
    
  } catch (e){
    console.log("Network error occured  = " + e)
    // alert ("Network error occured  = " + e);
    return null
  }
}
export const updateStyles = (styles) => async (dispatch) => {
  try{
    if (!(styles instanceof Object)) { throw new Error ('updateStyles (thunk): is not an object!') }
    let response =  await stylesAPI.updateStyles (styles)
    dispatch (setStyles(response.styles))
    return response.styles
  } catch (e) {
    alert ('Network error occured = ' + e)
    return null
  }
}
export const deleteBook = ( id) => async (dispatch) => {
  try {
    let response = await filesAPI.deleteBook ( Number(id))
    dispatch (dispatch(setLibs(response.libsTree)))
  } catch (e) {
    alert ("Cannot delete the book: Server error! Message = " + e)
    return null
  }
}
export const signIn = ( password) => async (dispatch) => {
  try {
    let response = await accountsAPI.signIn ( password)
    dispatch (dispatch(setCredentials(response. response.password)))
  }catch (e) {
    alert ('Cannot perform a sign in!');
    return null
  }
}
export const signUp = ( password) => async (dispatch) => {
  try {
    let response = await accountsAPI.signUp ( password)
    dispatch (dispatch(setCredentials(response. response.password)))
  }catch (e) {
    alert ('Cannot perform a sign up')
  }
}
