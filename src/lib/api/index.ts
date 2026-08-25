import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL
const api = axios.create({ baseURL: baseUrl })
api.defaults.headers.common['Content-Type'] = 'application/json'

export default api
