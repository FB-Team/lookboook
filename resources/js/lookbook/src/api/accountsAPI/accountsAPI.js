import * as axios from 'axios'

{/*baseURL: 'http://rybakisd.beget.tech/accountsAPI'*/}

const filesAxios = axios.create({
  baseURL: 'http://lookbook/api/accountsAPI'
})
export const accountsAPI = {
  async signIn (login, password) {
   const response = await filesAxios.put (login, {password})
   if (response) return response.data
   else throw new Error ('FilesAPI: Cannot get response from a server!')
 },
 async signUp (login, password) {
   const response = await filesAxios.post (login, {password})
   if (response) return response.data
   else throw new Error ('FilesAPI: Cannot get response from a server!')
 }
}
