'use client'
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('No token found. Please sign in.');
                return;
            }

            const res = await fetch('http://localhost:8000/api/current-user/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            });

            if (res.ok) {
                const data = await res.json();
                setUser(data);
            } else {
                console.error('Failed to fetch user info');
            }
        };

        fetchUser();
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            {user ? (
                <p>Welcome, {user.username}!</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
