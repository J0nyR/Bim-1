import { useSession } from '@/context/SessionContext';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { profile, loading } = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (profile?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;