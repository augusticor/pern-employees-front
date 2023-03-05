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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='inpemail'>Email</label>
        <input type='email' name='email' id='inpemail' autoFocus onChange={handleChange} />

        <label htmlFor='inppassword'>Password</label>
        <input type='password' name='password' id='inppassword' onChange={handleChange} />

        <button>Login</button>
      </form>

      <Link href='/auth/register'>No account yet ? Create one</Link>
    </>
  );
};
