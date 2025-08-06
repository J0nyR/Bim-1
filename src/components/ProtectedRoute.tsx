import { useSession } from '@/context/SessionContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { session, loading } = useSession();

  if (loading) {
    return <div>Loading session...</div>; // Atau komponen spinner yang lebih baik
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;