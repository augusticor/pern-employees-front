import { useState } from 'react';
import { GiEyelashes, GiSunkenEye } from 'react-icons/gi';

interface Props {
  inputClasses: string;
  svgFillColor: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput: React.FC<Props> = ({
  inputClasses,
  svgFillColor,
  handleChange,
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <>
      <label htmlFor='inppassword' className='mt-5'>
        Password (5+ alphanumeric)
        <abbr
          title='Required, 5 or more letters and/or numbers'
          aria-required='true'
          className='ml-2'
        >
          *
        </abbr>
      </label>
      <div className='grid grid-cols-2 items-center gap-3'>
        <input
          className={`${inputClasses}`}
          type={hidePassword ? 'password' : 'text'}
          name='password'
          id='inppassword'
          placeholder='****************'
          title='5 or more letters and/or numbers'
          onChange={handleChange}
        />

        <button
          type='button'
          className='text-xl justify-self-center'
          onClick={() => setHidePassword(!hidePassword)}
        >
          {hidePassword ? (
            <GiSunkenEye className={svgFillColor} />
          ) : (
            <GiEyelashes className={svgFillColor} />
          )}
        </button>
      </div>
    </>
  );
};
