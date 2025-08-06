import { useSession } from '@/context/SessionContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { session, loading } = useSession();

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading session...</div>;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;