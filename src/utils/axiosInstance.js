// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080', // works for dev & prod
    withCredentials: true, // use if you plan to send cookies
});

// Inject X-User-Id dynamically (fallback to a test ID for now)
instance.interceptors.request.use((config) => {
    const userId = localStorage.getItem('userId') || 'user-123'; // Use a real auth method later
    config.headers['X-User-Id'] = userId;
    return config;
});

export default instance;
