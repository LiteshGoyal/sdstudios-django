'use client';

export default function SignOut() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    location.href = '/auth/sign-in'

    return (
        <div>

        </div>
    );
}

// pages/signout.js
// context/AuthContext.js
// 'use client'

// import { useRouter } from 'next/navigation'

// export default function SignOut () {
//   const router = useRouter()

//   const handleLogout = async () => {
//     try {
//       const refreshToken = localStorage.getItem('refresh_token')

//       if (refreshToken) {
//         await fetch('http://127.0.0.1:8000/api/logout/', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             refresh_token: refreshToken
//           })
//         })
//       }

//       // Clear tokens from localStorage
//       localStorage.removeItem('access_token')
//       localStorage.removeItem('refresh_token')

//       // Redirect to login page
//       router.push('/auth/sign-in')
//     } catch (error) {
//       console.error('Logout error:', error)
//       // Still remove tokens and redirect even if backend call fails
//       localStorage.removeItem('access_token')
//       localStorage.removeItem('refresh_token')
//       router.push('/auth/sign-in')
//     }
//   }

//   return { handleLogout }
// }