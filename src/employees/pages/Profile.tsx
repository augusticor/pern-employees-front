import { FcBusinessman, FcManager } from 'react-icons/fc';
import { useAuthStore } from '../../store/useAuthStore';

export const Profile = () => {
  const user = useAuthStore((state) => state.user);

  const inputClasses =
    'text-lg outline-1 outline-sky-700 border rounded border-slate-200 hover:border-sky-600 pl-2 outline-offset-2';

  return (
    <div className='bg-neutral-100 flex justify-center py-10'>
      <main className='flex flex-col gap-y-12 w-full sm:w-11/12 bg-amber-50 rounded-lg shadow-md p-10 overflow-y-auto'>
        <section className='grid grid-cols-[1fr_1fr] items-center justify-items-center'>
          {user?.role ? <FcBusinessman size={100} /> : <FcManager size={100} />}

          <div className='flex flex-col gap-4'>
            <label htmlFor='userid'>
              ID: <span id='userid'>{user?.id || 2}</span>
            </label>

            <label htmlFor='managerid'>
              Manager: <b id='userid'>{user?.managerId || 'Not hired yet'}</b>
            </label>

            <label htmlFor='email'>
              Email: <span id='email'>{user?.email || 'email@supermeail.com'}</span>
            </label>
          </div>
        </section>

        <strong className='text-sky-500'>Editable information</strong>

        <form className='grid grid-cols-4 gap-y-8 gap-x-10'>
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
            defaultValue={user?.firstName || ''}
          />

          <label htmlFor='inplastname'>Last Name</label>
          <input
            className={`${inputClasses}`}
            type='text'
            name='lastName'
            id='inplastname'
            placeholder='Barela'
            defaultValue={user?.lastName || ''}
          />

          <button className='col-span-2 col-start-2 bg-sky-800 text-neutral-100 text-lg rounded-lg py-2 mt-5 hover:bg-sky-900'>
            Edit info
          </button>
        </form>

        <hr className='my-5 border-blue-200' />

        <strong className='text-sky-500'>Edit Password</strong>

        <hr className='my-5 border-pink-200' />

        <strong className='text-pink-500'>Danger zone</strong>

        <button className='bg-pink-600 w-max p-2 text-neutral-200 rounded-lg hover:bg-pink-700'>
          Delete Account
        </button>
      </main>
    </div>
  );
};
