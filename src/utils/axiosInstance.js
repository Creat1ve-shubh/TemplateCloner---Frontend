import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080', // backend URL
});

// Stub auth header
instance.interceptors.request.use((config) => {
    config.headers['X-User-Id'] = 'user-123'; // auth
    return config;
});

export default instance;
