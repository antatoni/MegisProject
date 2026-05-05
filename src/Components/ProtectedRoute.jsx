import { Navigate } from 'react-router';
import { useSession } from './Context/SessionStorage';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useSession();

  if (loading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
