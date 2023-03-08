import { Redirect, Route, Switch } from 'wouter';
import { Login } from '../auth/pages/Login';
import { Register } from '../auth/pages/Register';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path='/auth/login' component={Login} />

      <Route path='/auth/register' component={Register} />

      <Route>
        <Redirect to='/auth/register' />
      </Route>
    </Switch>
  );
};
