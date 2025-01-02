'use client';

export default function SignOut() {
    localStorage.removeItem('user')
    location.href='/auth/sign-in'

    return (
        <div>
            
        </div>
    );
}
