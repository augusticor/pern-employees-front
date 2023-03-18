import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'wouter';
import { useForm } from '../../hooks/genericUseForm';
import { useAuthStore } from '../../store/useAuthStore';
import { registerFormValidationsObjectType, RegisterUser } from '../../types';
import { PasswordInput } from '../components/PasswordInput';

// Regex to validate
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^\w{5,60}$/;

const registerFormFields: RegisterUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: false,
};

const registerFormValidations: registerFormValidationsObjectType = {
  firstName: [
    (firstName) =>
      typeof firstName === 'string' && firstName.length > 1 && firstName.length < 51,
    'Firstname is too short',
  ],
  lastName: [
    (lastName = 'auxval') =>
      typeof lastName === 'string' &&
      (lastName.length === 0 || (lastName.length > 1 && lastName.length < 51)),
    'Lastname is too short',
  ],
  email: [
    (email) => typeof email === 'string' && emailRegex.test(email),
    'Email is not valid',
  ],
  password: [
    (password) => typeof password === 'string' && passwordRegex.test(password),
    '5 or more letters and/or numbers',
  ],
  role: [() => true, 'Not a valid role'],
};

export const Register = () => {
  const register = useAuthStore((state) => state.register);
  const errorMessage = useAuthStore((state) => state.errorMessage);

  const { onInputChange, formState, isFormValid, checkedFormFields } = useForm<RegisterUser>(
    registerFormFields,
    registerFormValidations
  );

  const {
    firstName: firstNameValid,
    lastName: lastNameValid,
    email: emailValid,
    password: passwordValid,
  } = checkedFormFields;

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    if (!isFormValid) return;
    register({ ...formState });
  };

  useEffect(() => {
    if (errorMessage) toast.error(errorMessage);
  }, [errorMessage]);

  const inputClasses =
    'text-lg outline-1 outline-cyan-700 border rounded border-slate-200 hover:border-cyan-600 pl-2 outline-offset-2';

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-gray-800 h-screen'>
      <main className='bg-gray-50 px-10 pt-10 sm:border-r-2 sm:border-cyan-900'>
        <form className='flex flex-col h-3/4 justify-between' onSubmit={handleSubmit}>
          <label htmlFor='inpfirstname'>
            First Name
            <abbr title='Required, min length 2' aria-required='true' className='ml-2'>
              *
            </abbr>
          </label>
          <input
            className={`${inputClasses}`}
            type='text'
            name='firstName'
            id='inpfirstname'
            placeholder='Juanito'
            autoFocus
            onChange={handleChange}
          />
          <p
            className={`text-pink-400 text-sm mt-1 ${
              isFormSubmitted && firstNameValid ? 'visible' : 'invisible'
            }`}
          >
            {firstNameValid || 'i am invisible'}
          </p>

          <label htmlFor='inplastname'>Last Name</label>
          <input
            className={`${inputClasses}`}
            type='text'
            name='lastName'
            id='inplastname'
            placeholder='Barela'
            onChange={handleChange}
          />
          <p
            className={`text-pink-400 text-sm mt-1 ${
              isFormSubmitted && lastNameValid ? 'visible' : 'invisible'
            }`}
          >
            {lastNameValid || 'i am invisible'}
          </p>

          <label htmlFor='inpemail'>
            Email
            <abbr title='Required valid email' aria-required='true' className='ml-2'>
              *
            </abbr>
          </label>
          <input
            className={`${inputClasses}`}
            type='email'
            name='email'
            id='inpemail'
            placeholder='juanito@gmail.com'
            onChange={handleChange}
          />
          <p
            className={`text-pink-400 text-sm mt-1 ${
              isFormSubmitted && emailValid ? 'visible' : 'invisible'
            }`}
          >
            {emailValid || 'i am invisible'}
          </p>

          <PasswordInput
            inputClasses={inputClasses}
            svgFillColor='hover:fill-cyan-900'
            handleChange={handleChange}
          />
          <p
            className={`text-pink-400 text-sm mt-1 ${
              isFormSubmitted && passwordValid ? 'visible' : 'invisible'
            }`}
          >
            {passwordValid || 'i am invisible'}
          </p>

          <label htmlFor='roles'>
            Select a role
            <abbr title='Managers can hire' className='ml-2'>
              *
            </abbr>
          </label>
          <fieldset
            id='roles'
            className='grid grid-rows-2 grid-cols-3 mt-4 items-center justify-items-start sm:justify-items-center md:place-items-center md:grid-rows-1 md:grid-cols-4'
          >
            <input
              className='w-5 h-5 peer/employee'
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
              className='w-5 h-5 peer/manager'
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

          <button
            className='text-lg text-white w-full border-2 rounded-md bg-cyan-700 mt-10 h-10 self-center border-cyan-600 font-bold hover:bg-cyan-900 hover:border-cyan-700 disabled:cursor-not-allowed'
            disabled={isFormSubmitted && !isFormValid}
          >
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
