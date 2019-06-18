import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.3.2:3333' // IP para localhost gerado pelo Genimotion.
})

export default api;