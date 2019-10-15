import axios from 'axios'
const api = axios.create({
    baseURL: 'http://api:3000',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token')
    if (token) config.headers['x-auth-token'] = token
    return config
})

export { api }
