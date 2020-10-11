import { TOGGLE } from '../../actions/content/credentialsDialog';
const initialState = {
  isVisible: false
}
function credentialsDialogReducer ( state = initialState, action ) {
  switch(action.type) {
    case TOGGLE:
    return {isVisible: !state.isVisible}
    default: return state;
  }
}
export default credentialsDialogReducer
