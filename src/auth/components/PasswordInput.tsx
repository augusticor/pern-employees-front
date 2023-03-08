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
        Password
      </label>
      <div className='grid grid-cols-2 items-center gap-3'>
        {hidePassword ? (
          <input
            className={`${inputClasses}`}
            type='password'
            name='password'
            id='inppassword'
            placeholder='****************'
            onChange={handleChange}
          />
        ) : (
          <input
            className={`${inputClasses}`}
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
            <GiSunkenEye className={svgFillColor} />
          ) : (
            <GiEyelashes className={svgFillColor} />
          )}
        </button>
      </div>
    </>
  );
};
