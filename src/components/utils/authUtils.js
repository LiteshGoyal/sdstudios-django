export const refreshAccessToken = async () => {
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
                return data.access;
            } else {
                // Handle the error, e.g., refresh token is invalid or expired
                return null;
            }
        } catch (error) {
            console.error('Error refreshing token:', error);
            return null;
        }
    }
    return null;
};
