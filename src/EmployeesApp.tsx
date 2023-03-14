import { Toaster } from 'sonner';
import { AppRouter } from './router/AppRouter';

const EmployeesApp = () => {
  return (
    <>
      <Toaster richColors />
      <AppRouter />
    </>
  );
};

export default EmployeesApp;
