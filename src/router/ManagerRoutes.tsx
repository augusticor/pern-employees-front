import { Route, Switch } from 'wouter';
import { Manager } from '../employees/pages';
import { EmployeeRoutes } from './EmployeeRoutes';

export const ManagerRoutes = () => {
  return (
    <Switch>
      <Route path='/manager' component={Manager} />

      <EmployeeRoutes />
    </Switch>
  );
};
