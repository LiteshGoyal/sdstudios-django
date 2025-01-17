import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

axios.defaults.withCredentials = true;

export const getCsrfToken = async () => {
    const response = await axios.get(`${API_URL}/csrf/`);
    axios.defaults.headers.common['X-CSRFToken'] = response.data.csrfToken;
    return response.data.csrfToken;
};

export const register = async (email, username, password, password2) => {
    await getCsrfToken();
    const response = await axios.post(`${API_URL}/register/`, {
        email,
        username,
        password,
        password2
    });
    return response.data;
};

export const login = async (email, password) => {
    await getCsrfToken();
    const response = await axios.post(`${API_URL}/login/`, {
        email,
        password
    });
    return response.data;
};

export const logout = async () => {
    await getCsrfToken();
    const response = await axios.post(`${API_URL}/logout/`);
    return response.data;
};