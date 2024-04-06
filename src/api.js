import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Update this URL based on your Laravel API's URL
});

export default api;
