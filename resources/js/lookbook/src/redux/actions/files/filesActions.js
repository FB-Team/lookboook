export const SETLIBS = 'SETLIBS'
export const PUTBOOK = 'PUTBOOK'
export const PUTLIB = 'PUTLIB'
export const CREATELIB = 'CREATELIB'
export const ADD_BOOK_TO_LIB = 'ADD_BOOK_TO_LIB'
export const SET_CURRENT_BOOK = 'SET_CURRENT_BOOK'
export const SET_BOOKS_AND_LIBS = 'SET_BOOKS_AND_LIBS'
export const SET_BOOK_FLAG = 'SET_BOOK_FLAG'
export const CLEAR_CURRENT_BOOK = 'CLEAR_CURRENT_BOOK'
export const SET_USER_ID = 'SET_USER_ID'

export const clearCurrentBook = () => ({
  type: CLEAR_CURRENT_BOOK
})
export const setBookFlag = (bookState) => ({
  type: SET_BOOK_FLAG,
  bookState
})
export const setLibs = (libs) => ({
  type: SETLIBS,
  libs
})
export const createBook = (login, libName, book) => ({
  type: PUTBOOK,
  login, libName, book
})
export const createLib = (login, libName) => ({
  type: CREATELIB,
  login, libName
})
export const addBookToLib = (libName, bookData) => ({
  type: ADD_BOOK_TO_LIB,
  libName,
  bookData
})
export const setCurrentBook = (bookContent, bookName,id) => ({
  type: SET_CURRENT_BOOK,
  book: bookContent,
  bookName,
  id
})
export const setUserId = (id) => ({
  type: SET_USER_ID,
  id
})