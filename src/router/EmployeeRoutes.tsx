import { Redirect, Route, Switch } from 'wouter';
import { Navbar } from '../employees/components/Navbar';
import { Colleagues, Profile } from '../employees/pages';
import { NotFound } from './pages/NotFound';

export const EmployeeRoutes = () => {
  return (
    <Switch>
      <Route path='/employee/:rest*'>
        <div className='grid grid-rows-[6%_94%] grid-cols-1 h-screen'>
          <Navbar />

          <Route path='/employee/profile' component={Profile} />

          <Route path='/employee/colleagues' component={Colleagues} />
        </div>
      </Route>

      <Route path='/auth/:rest*'>
        <Redirect to='/employee/profile' />
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
};
