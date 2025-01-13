import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            // Ensure this runs only in the browser
            if (typeof window !== 'undefined') {
              const token = localStorage.getItem('access_token');
              if (!token) {
                alert('You need to login first!');
                router.push('/auth/sign-in'); // Redirect to login page
              } else {
                setIsAuthenticated(true); // Set authentication status
              }
            }
          }, [router]);

        // Render nothing while checking authentication
        if (!isAuthenticated) {
            return null;
          }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
