import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.currentUser);
  

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      if(isAuthenticated.role === 'admin')
      {
        router.push('/admin') // Redirect to admin if authenticated
      }else if(isAuthenticated.role === 'teacher'){
        router.push('/teacher'); // Redirect to home if authenticated
      }else{
        router.push('/courseSelection')
      }
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) return null; // Show nothing while redirecting
  return children;
};

export default NotProtectedRoute;