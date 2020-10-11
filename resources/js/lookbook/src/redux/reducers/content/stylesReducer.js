import {
  ADD_SELECTED_STYLE,
  SET_STYLES
} from '../../actions/content/stylesActions';

const initialState = {
  styles: {
   "font-size": "18px",
   "line-height": "18px",
   "color":"black",
   "background-color": "white"
 },
 values: {
   "font-size":        ["12px","14px","16px","18px","20px","22px", "24px", "26px"],
   "line-height":      ["12px","14px","16px","18px","20px","22px", "24px", "26px"],
   "color":            ["black", 'white', 'silver'],
   "background-color": ["black", "white", "silver", "#FFFAAB"]
 }
}
function stylesReducer (state = initialState, action) {
  switch(action.type) {
    case SET_STYLES:

    // ДЕЛАЕМ ПРОСТУЮ ПРОВЕРКУ СТИЛЕЙ, ПОТОМ ОБНОВЛЯЕМ НАШ STATE
    return {...state, styles: action.styles}

    // НУЖНО НА ТОТ СЛУЧАЙ, ЕСЛИ ПО КАКОЙ-ТО ПРИЧИНЕ ЗНАЧЕНИЕ ПРИЩЕДШЕГО С СЕРВЕРА СТИЛЯ НЕ ВХОДИТ В ВЫБОРКУ
    // -ИЗМЕНЯЮЩИХСЯ ЗНАЧЕНИЙ, В ТАКОМ СЛУЧАЕ ПРОСТО МОДИФИЦИРУЕМ ВЫБОРКУ
    case ADD_SELECTED_STYLE:
    const newValues = JSON.parse(JSON.stringify(state.values))
    if (newValues.hasOwnProperty(action.styleName)){
      newValues[action.styleName] = action.value
    } else {
      throw new Error ('stylesReducer(ADD_SELECTED_STYLE): No such property found')
    }
    return {...state, values: newValues}
    default: return state;
  }
}
export default stylesReducer
