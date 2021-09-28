import * as axios from 'axios'

const stylesAxios = axios.create({
      baseURL: 'http://lookbook/api/stylesApi'
})
export const stylesAPI = {
  async getStyles () {
   const response = await stylesAxios.get()
   if (response.data)
   return response.data
   else {
     throw new Error ('Cannot receiver data through the stlyles API!');
   }
 },
 async updateStyles (styles) {
     console.log(styles);
     const response = await stylesAxios.patch(`/update`, {styles});
   if (response.data)
   return response.data
   else {
     throw new Error ('Cannot update styles through the stylesAPI!');
   }
 }
}
