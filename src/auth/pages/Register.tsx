import { useState } from 'react';
import { Link } from 'wouter';
import { RegisterUser } from '../../types';
import { PasswordInput } from '../components/PasswordInput';

export const Register = () => {
  const inputClasses =
    'text-lg outline-1 outline-cyan-700 border rounded border-slate-200 hover:border-cyan-600 pl-2 outline-offset-2';

  const [formValues, setFormValues] = useState<RegisterUser>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-gray-800 h-screen'>
      <main className='bg-gray-50 px-10 pt-10 sm:border-r-2 sm:border-cyan-900'>
        <form className='flex flex-col h-3/4 justify-between' onSubmit={handleSubmit}>
          <label htmlFor='inpfirstname'>First Name</label>
          <input
            className={`${inputClasses}`}
            type='text'
            name='firstName'
            id='inpfirstname'
            placeholder='Juanito'
            autoFocus
            onChange={handleChange}
          />

          <label htmlFor='inplastname'>Last Name</label>
          <input
            className={`${inputClasses}`}
            type='text'
            name='lastName'
            id='inplastname'
            placeholder='Barela'
            onChange={handleChange}
          />

          <label htmlFor='inpemail'>Email</label>
          <input
            className={`${inputClasses}`}
            type='email'
            name='email'
            id='inpemail'
            placeholder='juanito@gmail.com'
            onChange={handleChange}
          />

          <PasswordInput
            inputClasses={inputClasses}
            svgFillColor='hover:fill-cyan-900'
            handleChange={handleChange}
          />

          <label htmlFor='roles'>Select a role</label>
          <fieldset
            id='roles'
            className='grid grid-rows-2 grid-cols-3 mt-4 items-center justify-items-start sm:justify-items-center md:place-items-center md:grid-rows-1 md:grid-cols-4'
          >
            <input
              className='text-green-600 w-5 h-5 peer/employee'
              type='radio'
              name='role'
              id='chbxemployee'
              value='false'
              defaultChecked
              onChange={handleChange}
            />
            <label
              htmlFor='chbxemployee'
              className='col-span-2 md:col-span-1 peer-checked/employee:text-cyan-900 peer-checked/employee:font-bold'
            >
              Employee
            </label>

            <input
              className='text-green-600 w-5 h-5 peer/manager'
              type='radio'
              name='role'
              id='chbxmanager'
              value='true'
              onChange={handleChange}
            />
            <label
              htmlFor='chbxmanager'
              className='col-span-2 md:col-span-1 peer-checked/manager:text-cyan-900 peer-checked/manager:font-bold'
            >
              Manager
            </label>
          </fieldset>

          <button className='text-lg text-white w-full border-2 rounded-md bg-cyan-700 mt-10 h-10 self-center border-cyan-600 font-bold hover:bg-cyan-900 hover:border-cyan-700'>
            Register
          </button>
        </form>

        <Link
          href='/auth/login'
          className='text-lg absolute bottom-5 hover:underline hover:text-cyan-900'
        >
          Have an account ? Login
        </Link>
      </main>
    </div>
  );
};
