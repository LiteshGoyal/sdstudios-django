// api.js (or axiosInstance.js)
import axios from 'axios';

// Base Axios instance
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://127.0.0.1:8000/api/",
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            try {
                const refreshToken = localStorage.getItem('refresh_token');
                if (!refreshToken) throw new Error('No refresh token available.');

                const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/token/refresh/`, {
                    refresh: refreshToken
                });
                
                localStorage.setItem('access_token', response.data.access);
                error.config.headers['Authorization'] = `Bearer ${response.data.access}`;
                
                // Retry the original request with new token
                return api.request(error.config);
            } catch (err) {
                console.error('Token refresh failed:', err);
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                window.location.href = '/auth/sign-in';  // Redirect to login on failure
            }
        }
        return Promise.reject(error);
    }
);

export default api;
