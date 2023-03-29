import { PasswordInput } from '../../auth/components';

export const UpdatePassword = () => {
  const handleUpdatePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const inputClasses =
    'text-lg outline-1 outline-sky-700 border rounded border-slate-200 hover:border-sky-600 pl-2 outline-offset-2';

  return (
    <form className='flex flex-col' onSubmit={handleUpdatePassword}>
      <div className='grid sm:grid-cols-[1fr_1fr] sm:grid-rows-2 items-center gap-y-2 md:gap-x-2'>
        <label>Old Password</label>

        <label className='hidden md:block'>New Password</label>

        <div>
          <PasswordInput
            inputId='oldpassword'
            inputClasses={inputClasses}
            svgFillColor='hover:fill-sky-600'
            handleChange={() => {}}
          />
        </div>

        <label className='block md:hidden'>New Password</label>

        <div>
          <PasswordInput
            inputId='newpassword'
            inputClasses={inputClasses}
            svgFillColor='hover:fill-sky-600'
            handleChange={() => {}}
          />
        </div>
      </div>

      <button className='self-start bg-sky-800 text-neutral-100 text-lg rounded-lg p-2 mt-5 hover:bg-sky-900'>
        Update password
      </button>
    </form>
  );
};
