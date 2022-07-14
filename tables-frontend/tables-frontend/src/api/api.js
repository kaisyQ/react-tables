import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

export const tableAPI = {
    getTableRows (pageNumber=1) {
        return instance.get(`/tables/${pageNumber}`)
    }
} 