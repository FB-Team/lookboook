export const CLEAR_SELECTED_ALL = 'CLEAR_SELECTED_ALL'
export const ADD_SELECTED = 'ADD_SELECTED'
export const CLEAR_SELECTED = 'CLEAR_SELECTED'
export const SET_URL = 'SET_URL'
export const setUrl = (url) => ({
  type: SET_URL,
  url
})
export const clearSelected = (id) => ({
  type: CLEAR_SELECTED,
  id
})
export const addSelectedFile = ( file ) => ({
  type: ADD_SELECTED,
  file
})
export const clearSelectedAll = () => ({
  type: CLEAR_SELECTED_ALL
})
