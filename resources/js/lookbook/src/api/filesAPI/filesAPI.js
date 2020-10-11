import * as axios from 'axios'
const filesAxios = axios.create({
    baseURL: 'http://lookbook:8000/api/filesApi',
    port: 8000
})
export const filesAPI = {
    async getLibs(login) {
        const response = await filesAxios.get(login)
        if (response) return response.data
        else throw new Error('FilesAPI: Cannot get response from a server!')
    },
    async putBooks(login, books) {
        const response = await filesAxios.post(login, books, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        if (response) return response.data
        else throw new Error('FilesAPI: Cannot get response from a server!')
    },
    async putBookByUrl(login, book) {
        const response = await filesAxios.post(login, { book })
        if (response) {
            return response.data
        } else throw new Error('filesAPI, putBookByUrl: no response received from the server!')
    },
    async createLib(login, libName, books) {
        const response = await filesAxios.put({ login, libName, books })
        if (response) return response.data
        else throw new Error('FilesAPI: Cannot get response from a server!')
    },
    async putLib(login, libs, books) {
        const response = await filesAxios.put({ login, libs, books })
        if (response) return response.data
        else throw new Error('FilesAPI: Cannot get response from a server!')
    },
    async getBook(login, name) {
        const response = await filesAxios.get(`${login}/item`, {
            params: {
                name
            }
        })
        if (response) return response.data
        else throw new Error('FilesAPI: Cannot get response from a server!')
    },
    async deleteBook(login, bookName) {
        const response = await filesAxios.delete(`${login}/${bookName}`)
        if (response) return response.data
        else throw new Error('FilesAPI: Cannot get response from a server!')
    }
}