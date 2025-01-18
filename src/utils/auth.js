export const handleSignOut = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('No token found. Please sign in first.');
        return false;
    }

    const res = await fetch('http://localhost:8000/api/signout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        },
    });

    if (res.ok) {
        localStorage.removeItem('token');
        alert('Sign out successful!');
        return true;
    } else {
        const data = await res.json();
        alert(data.error || 'Sign out failed.');
        return false;
    }
};
