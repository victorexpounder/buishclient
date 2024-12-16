import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.currentUser);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) return null; // Show nothing while redirecting
  return children;
};

export default NotProtectedRoute;