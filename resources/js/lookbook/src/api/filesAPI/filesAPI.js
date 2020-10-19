import * as axios from 'axios'
const filesAxios = axios.create({
    baseURL: 'http://lookbook:8000/api/filesApi',
    port: 8000
})
export const filesAPI = {
    async getLibs() {
        const response = await filesAxios.get()
        if (response) return response.data
        else throw new Error('FilesAPI: Cannot get response from a server!')
    },
    async putBooks(books, rootLib, id = null) {
        const response = await filesAxios.post('', {books, isRoot: rootLib, id:libId}, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        if (response) return response.data
        else throw new Error('FilesAPI: Cannot get response from a server!')
    },
    async putBookByUrl(book) {
        const response = await filesAxios.post({ book })
        if (response) {
            return response.data
        } else throw new Error('filesAPIputBookByUrl: no response received from the server!')
    },
    async createLib(libNamebooks) {
        const response = await filesAxios.put({libNamebooks })
        if (response) return response.data
        else throw new Error('FilesAPI: Cannot get response from a server!')
    },
    async putLib(libsbooks) {
        const response = await filesAxios.put({libsbooks })
        if (response) return response.data
        else throw new Error('FilesAPI: Cannot get response from a server!')
    },
    async getBook(name) {
        const response = await filesAxios.get(`item`, {
            params: {
                name
            }
        })
        if (response) return response.data
        else throw new Error('FilesAPI: Cannot get response from a server!')
    },
    async deleteBook(bookName) {
        const response = await filesAxios.delete(`bookName`)
        if (response) return response.data
        else throw new Error('FilesAPI: Cannot get response from a server!')
    }
}