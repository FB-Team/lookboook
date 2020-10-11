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


export const getAllLibs = (login) => async (dispatch) => {
  try {
    let response = await filesAPI.getLibs(login)
    dispatch (setLibs (response.libs))
  } catch (e) {
    alert ('Cannot load the libs! Message = ' + e)
  }
}

export const putBooks = (login, books) => async (dispatch) => {
  try {
    let response = await filesAPI.putBooks(login, books)
    dispatch(setCurrentBook(response.content))
    dispatch(setLibs(response.libsTree))
    dispatch(clearSelectedAll())
  } catch (e) {
    alert ('Cannot put books to the server! Message = ' + e)
  }
}
export const putBookByUrl = (login, book) => async (dispatch) => {
  try {
    let response = await filesAPI.putBookByUrl(login, book)
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
export const getBook = (login, bookName) => async (dispatch) => {
  try {
    dispatch (clearCurrentBook())
    let response = await filesAPI.getBook (login, bookName)
    dispatch(setCurrentBook(response.book, bookName))
    return response.book
  } catch (e) {
    alert ('Cannot load a book! Message = ' + e)
  }
}
export const getStyles = (login) => async (dispatch) => {
  try {
    let response =  await stylesAPI.getStyles (login)
    let styles = response.styles
    if (typeof styles == 'string') {
      styles = JSON.parse (styles)
    }
    dispatch (setStyles(styles))
    return styles
  } catch (e){
    alert ("Network error occured  = " + e);
    return null
  }
}
export const updateStyles = (login, styles) => async (dispatch) => {
  try{
    if (!(styles instanceof Object)) { throw new Error ('updateStyles (thunk): is not an object!') }
    let response =  await stylesAPI.updateStyles (login, styles)
    dispatch (setStyles(response.styles))
    return response.styles
  } catch (e) {
    alert ('Network error occured = ' + e)
    return null
  }
}
export const deleteBook = (login, id) => async (dispatch) => {
  try {
    let response = await filesAPI.deleteBook (login, Number(id))
    dispatch (dispatch(setLibs(response.libsTree)))
  } catch (e) {
    alert ("Cannot delete the book: Server error! Message = " + e)
    return null
  }
}
export const signIn = (login, password) => async (dispatch) => {
  try {
    let response = await accountsAPI.signIn (login, password)
    dispatch (dispatch(setCredentials(response.login, response.password)))
  }catch (e) {
    debugger
    alert ('Cannot perform a sign in!');
    return null
  }
}
export const signUp = (login, password) => async (dispatch) => {
  try {
    let response = await accountsAPI.signUp (login, password)
    dispatch (dispatch(setCredentials(response.login, response.password)))
  }catch (e) {
    debugger
    alert ('Cannot perform a sign up')
  }
}
