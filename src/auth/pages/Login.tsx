import { useState } from 'react';
import { Link } from 'wouter';
import { LoginUser } from '../../types';

export const Login = () => {
  const [formValues, setFormValues] = useState<LoginUser>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className='h-screen flex justify-center items-center bg-indigo-900'>
      <main className='bg-slate-50 w-2/5 max-w-screen-sm h-3/5 flex flex-col rounded-lg px-14 gap-10'>
        <h1 className='text-2xl mt-5'>Employees App Login</h1>

        <form className='flex flex-col h-5/6 flex-wrap pt-10' onSubmit={handleSubmit}>
          <label htmlFor='inpemail'>Email</label>
          <input
            className='text-lg border-b-2 border-blue-700'
            type='email'
            name='email'
            id='inpemail'
            placeholder='email@gmail.com'
            autoFocus
            onChange={handleChange}
          />

          <label htmlFor='inppassword'>Password</label>
          <input
            className='text-lg border-b-2 border-blue-700 focus:border-0 focus:border-none'
            type='password'
            name='password'
            id='inppassword'
            onChange={handleChange}
          />

          <button className='border-2 border-black mt-5'>Login</button>
        </form>

        <Link href='/auth/register'>No account yet ? Create one</Link>
      </main>
    </div>
  );
};
