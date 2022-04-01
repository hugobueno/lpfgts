
import axios from 'axios'
const api = axios.create({
    baseURL: process.env.BASE_URL_API || 'http://localhost:3001/api',
    withCredentials: true
})
export default api