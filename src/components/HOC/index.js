import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();

        useEffect(() => {
            const token = localStorage.getItem('access_token');
            if (!token) {
                // Redirect to login page if not authenticated
                router.push('/auth/sign-in');
                alert('You need to login first!');
            }
        }, []);

        // Render nothing while checking authentication
        const token = localStorage.getItem('access_token');
        if (!token) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
