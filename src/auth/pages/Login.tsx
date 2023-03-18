import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { useAuthStore } from '../../store/useAuthStore';
import { loginFormValidationsObjectType, LoginUser } from '../../types';
import { PasswordInput } from '../components/PasswordInput';
import { toast } from 'sonner';
import { useForm } from '../../hooks/genericUseForm';

// Regex to validate
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^\w{5,60}$/;

const loginFormFields: LoginUser = { email: '', password: '' };

const loginFormValidations: loginFormValidationsObjectType = {
  email: [(email) => emailRegex.test(email), 'Email is not valid'],
  password: [(pasword) => passwordRegex.test(pasword), '5 or more letters and/or numbers'],
};

export const Login = () => {
  const login = useAuthStore((state) => state.login);
  const errorMessage = useAuthStore((state) => state.errorMessage);

  const { onInputChange, formState, isFormValid, checkedFormFields } = useForm<LoginUser>(
    loginFormFields,
    loginFormValidations
  );

  const { email: emailValid, password: passwordValid } = checkedFormFields;

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    if (!isFormValid) return;
    login(formState);
  };

  useEffect(() => {
    if (errorMessage) toast.error(errorMessage);
  }, [errorMessage]);

  const inputsClasses =
    'text-lg border-b-2 mt-3 outline-none border-lime-100 focus:border-lime-300 hover:border-lime-200';

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
          <p
            className={`text-red-400 text-sm mt-1 ${
              isFormSubmitted && emailValid ? 'visible' : 'invisible'
            }`}
          >
            {emailValid || 'i am invisible'}
          </p>

          <PasswordInput
            inputClasses={inputsClasses}
            svgFillColor='hover:fill-lime-900'
            handleChange={handleChange}
          />
          <p
            className={`text-red-400 text-sm mt-1 ${
              isFormSubmitted && passwordValid ? 'visible' : 'invisible'
            }`}
          >
            {passwordValid || 'i am invisible'}
          </p>

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
