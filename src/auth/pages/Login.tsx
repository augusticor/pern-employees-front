import { useState } from 'react';
import { Link } from 'wouter';
import { LoginUser } from '../../types';
import { PasswordInput } from '../components/PasswordInput';

export const Login = () => {
  const inputsClasses =
    'text-lg border-b-2 mt-3 outline-none border-lime-100 focus:border-lime-300 hover:border-lime-200';

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
            className={`${inputsClasses}`}
            type='email'
            name='email'
            id='inpemail'
            placeholder='email@gmail.com'
            autoFocus
            onChange={handleChange}
          />

          <PasswordInput
            inputClasses={inputsClasses}
            svgFillColor='hover:fill-lime-900'
            handleChange={handleChange}
          />

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
