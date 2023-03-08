import { useState } from 'react';
import { Link } from 'wouter';
import { LoginUser } from '../../types';
import { GiEyelashes, GiSunkenEye } from 'react-icons/gi';

export const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [formValues, setFormValues] = useState<LoginUser>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className='h-screen flex justify-center items-center bg-lime-600'>
      <main className='bg-white w-1/3 max-w-lg h-max flex flex-col rounded-lg px-14 items-center'>
        <h1 className='text-2xl mt-3'>Employees App - Login</h1>

        <form className='flex flex-col pt-10 w-full' onSubmit={handleSubmit}>
          <label htmlFor='inpemail'>Email</label>
          <input
            className='text-lg border-b-2 mt-3 outline-none border-lime-100 focus:border-lime-300 hover:border-lime-200'
            type='email'
            name='email'
            id='inpemail'
            placeholder='email@gmail.com'
            autoFocus
            onChange={handleChange}
          />

          <label htmlFor='inppassword' className='mt-5'>
            Password
          </label>
          <div className='grid grid-cols-2 items-center gap-3'>
            {hidePassword ? (
              <input
                className='text-lg border-b-2 mt-3 outline-none border-lime-100 focus:border-lime-300 hover:border-lime-200'
                type='password'
                name='password'
                id='inppassword'
                placeholder='****************'
                onChange={handleChange}
              />
            ) : (
              <input
                className='text-lg border-b-2 mt-3 outline-none border-lime-100 focus:border-lime-300 hover:border-lime-200'
                type='text'
                name='password'
                id='inppassword'
                onChange={handleChange}
              />
            )}

            <button
              type='button'
              className='text-xl justify-self-center'
              onClick={() => setHidePassword(!hidePassword)}
            >
              {hidePassword ? (
                <GiSunkenEye className='hover:fill-lime-900' />
              ) : (
                <GiEyelashes className='hover:fill-lime-900' />
              )}
            </button>
          </div>

          <button className='text-lg border-2 bg-lime-400 mt-10 w-24 h-9 self-center border-green-700 font-medium hover:bg-lime-500 hover:border-lime-900 hover:font-bold'>
            Login
          </button>
        </form>

        <Link href='/auth/register' className='mt-10 mb-2 hover:underline'>
          No account yet ? Create one
        </Link>
      </main>
    </div>
  );
};
