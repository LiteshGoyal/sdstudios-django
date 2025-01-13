// hooks/useAuth.js
'use client'
import { useState } from 'react';

export const useAuth = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'));

    const refreshAccessToken = async () => {
        const refreshToken = localStorage.getItem('refresh_token');

        if (refreshToken) {
            try {
                const res = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ refresh: refreshToken }),
                });

                if (res.ok) {
                    const data = await res.json();
                    localStorage.setItem('access_token', data.access);
                    setAccessToken(data.access); // Update the state
                    return data.access;
                } else {
                    return null;
                }
            } catch (error) {
                console.error('Error refreshing token:', error);
                return null;
            }
        }
        return null;
    };

    return {
        accessToken,
        refreshAccessToken,
    };
};
