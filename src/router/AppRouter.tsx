import { useAuthStore } from '../store/useAuthStore';
import { AuthRoutes } from './AuthRoutes';
import { EmployeeRoutes } from './EmployeeRoutes';
import { ManagerRoutes } from './ManagerRoutes';

export const AppRouter = () => {
  const authStatus = useAuthStore((state) => state.authStatus);
  const role: boolean = false;

  if (authStatus === 'checking') return <h1>Loading ...</h1>;

  return authStatus === 'not-authenticated' ? (
    <AuthRoutes />
  ) : role ? (
    <ManagerRoutes />
  ) : (
    <EmployeeRoutes />
  );
};
