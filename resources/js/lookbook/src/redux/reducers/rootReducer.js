import { combineReducers } from 'redux';

import accountsReducer from './accounts/accountsReducer';
import credentialsDialogReducer from './content/credentialsDialogReducer';
import filesReducer from './files/filesReducer';
import selectedFilesReducer from './files/selectedFilesReducer';
import stylesReducer from './content/stylesReducer';

const rootReducer  = combineReducers ({accounts: accountsReducer, files: filesReducer,
    selectedFiles: selectedFilesReducer, styles: stylesReducer, dialog: credentialsDialogReducer})
export default rootReducer
