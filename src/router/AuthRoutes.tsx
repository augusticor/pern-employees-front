import { Redirect, Route, Switch } from 'wouter';
import { Login } from '../auth/pages/Login';
import { Register } from '../auth/pages/Register';
import { NotFound } from './pages/NotFound';

export const AuthRoutes = () => {
  return (
    <Switch>
      <Route path='/auth/login' component={Login} />

      <Route path='/auth/register' component={Register} />

      <Route path='/employee/:rest*'>
        <Redirect to='/auth/login' />
      </Route>

      <Route path='/manager/:rest*'>
        <Redirect to='/auth/login' />
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
};
