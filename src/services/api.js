import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'e80ffdbab09a39b82eed0b27b3e6729d',
        language: 'pt-BR',
        page: 1
    }
})

export default api