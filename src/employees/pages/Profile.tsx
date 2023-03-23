import { FieldErrorParagraph } from '../../auth/components';
import { useAuthStore } from '../../store/useAuthStore';

export const Profile = () => {
  const user = useAuthStore((state) => state.user);

  const inputClasses =
    'text-lg outline-1 outline-cyan-700 border rounded border-slate-200 hover:border-cyan-600 pl-2 outline-offset-2';

  return (
    <div className='bg-neutral-100 flex justify-center py-10'>
      <main className='w-full sm:w-11/12 bg-zinc-50 rounded-lg shadow-md'>
        <form className='grid grid-cols-4'>
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
          />

          <label htmlFor='inplastname'>Last Name</label>
          <input
            className={`${inputClasses}`}
            type='text'
            name='lastName'
            id='inplastname'
            placeholder='Barela'
          />
          <FieldErrorParagraph
            toggle={false /*(isFormSubmitted && lastNameValid) as boolean*/}
            text={'Error' /*lastNameValid as string*/}
            color='text-pink-400'
          />
        </form>
      </main>
    </div>
  );
};
