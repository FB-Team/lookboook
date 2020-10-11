export const SIGNIN = 'SIGNIN'
export const SIGNUP = 'SIGNUP'
export const SETCREDENTIALS ='SETCREDENTIALS'
export const SET_AUTH_PATH = 'SET_AUTH_PATH'

export const setAuthPath = (authPath) => ({
  type: SET_AUTH_PATH,
  authPath
})
export const signIn = (login, password) => ({
  type: SIGNIN,
  login, password
})
export const signUp = (login, password) => ({
  type: SIGNUP,
  login, password
})
export const  setCredentials = (login, password) => ({
  type: SETCREDENTIALS,
  login, password
})
