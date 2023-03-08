import { useState } from 'react';
import { Link } from 'wouter';
import { RegisterUser } from '../../types';

export const Register = () => {
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
    <div className='grid grid-cols-3 bg-sky-800 h-screen'>
      <main className='bg-white'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='inpfirstname'>First Name</label>
          <input
            type='text'
            name='firstName'
            id='inpfirstname'
            autoFocus
            onChange={handleChange}
          />

          <label htmlFor='inplastname'>Last Name</label>
          <input type='text' name='lastName' id='inplastname' onChange={handleChange} />

          <label htmlFor='inpemail'>Email</label>
          <input type='email' name='email' id='inpemail' onChange={handleChange} />

          <label htmlFor='inppassword'>Password</label>
          <input type='password' name='password' id='inppassword' onChange={handleChange} />

          <label htmlFor='roles'>Select a role</label>
          <fieldset id='roles'>
            <legend>Just legend</legend>

            <input
              type='radio'
              name='role'
              id='chbxemployee'
              value='false'
              defaultChecked
              onChange={handleChange}
            />
            <label htmlFor='chbxemployee'>Employee</label>

            <input
              type='radio'
              name='role'
              id='chbxmanager'
              value='true'
              onChange={handleChange}
            />
            <label htmlFor='chbxmanager'>Manager</label>
          </fieldset>

          <button>Register</button>
        </form>

        <Link to='/auth/login'>Have an account ? Login</Link>
      </main>
    </div>
  );
};
