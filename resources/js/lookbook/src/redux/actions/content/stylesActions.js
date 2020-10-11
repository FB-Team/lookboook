export const SET_STYLES = 'SET_STYLES'
export const ADD_SELECTED_STYLE= 'ADD_SELECTED_STYLE'
export const CHANGE_CURRENT_STYLE = 'CHANGE_CURRENT_STYLE'
export const setStyles = (styles) => ({
  type: SET_STYLES,
   styles
})
export const addSelectedStyle = (styleName, value) => ({
  type: ADD_SELECTED_STYLE,
  styleName,
  value
})
