import { Redirect, Route, Switch } from 'wouter';
import { Colleagues, Profile } from '../employees/pages';
import { NotFound } from './pages/NotFound';

export const EmployeeRoutes = () => {
  return (
    <Switch>
      <Route path='/employee/profile' component={Profile} />

      <Route path='/employee/colleagues' component={Colleagues} />

      <Route path='/auth/:rest*'>
        <Redirect to='/employee/profile' />
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
};
