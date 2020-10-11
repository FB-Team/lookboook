import {
  SETCREDENTIALS,
  SET_AUTH_PATH
} from '../../actions/accounts/accountActions';

const cookies = {}
let login = 'root'
let password = ''
 document.cookie.split(';').forEach(cookie => {
 const key = cookie.split('=')[0]
 const value = cookie.split('=')[1]
 cookies.key = value
})
if (cookies.hasOwnProperty ('login') && cookies.hasOwnProperty('user_hash')){
   login = cookies['login']
   password = cookies['user_hash']
 }
const initialState = {
  login: login,
  password: password,
  authPath: '/sign-in',

}
const accountsReducer = (state = initialState, action) => {
  switch (action.type){
    case SETCREDENTIALS:
    return {...state, login: action.login, password: action.password}
    
    case SET_AUTH_PATH:
    return {...state, authPath: action.authPath}
    default: return state
  }
}
export default accountsReducer
