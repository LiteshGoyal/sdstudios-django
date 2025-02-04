
export const handleSignOut = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('No token found. Please sign in first.');
        return;
    }

    const res = await fetch('http://localhost:8000/api/signout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        },
    });

    const data = await res.json();
    if (res.ok) {
        localStorage.removeItem('token');
        alert('Sign out successful!');
        return true
    } else {
        alert(data.error || 'Sign out failed.');
        return false
    }
};
