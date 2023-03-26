import { useAuthStore } from '../store/useAuthStore';
import { AuthRoutes } from './AuthRoutes';
import { EmployeeRoutes } from './EmployeeRoutes';
import { ManagerRoutes } from './ManagerRoutes';
import { Loading } from './pages/Loading';

export const AppRouter = () => {
  const authStatus = useAuthStore((state) => state.authStatus);
  const role = useAuthStore((state) => state.user?.role);

  if (authStatus === 'checking') return <Loading />;

  return authStatus === 'not-authenticated' ? (
    <AuthRoutes />
  ) : role ? (
    <ManagerRoutes />
  ) : (
    <EmployeeRoutes />
  );
};
