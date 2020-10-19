import * as axios from 'axios'

{/*baseURL: 'http://rybakisd.beget.tech/accountsAPI'*/}

const filesAxios = axios.create({
  baseURL: 'http://lookbook/api/accountsAPI'
})
export const accountsAPI = {
  async signIn (password) {
   const response = await filesAxios.put ({password})
   if (response) return response.data
   else throw new Error ('FilesAPI: Cannot get response from a server!')
 },
 async signUp (password) {
   const response = await filesAxios.post ({password})
   if (response) return response.data
   else throw new Error ('FilesAPI: Cannot get response from a server!')
 }
}
