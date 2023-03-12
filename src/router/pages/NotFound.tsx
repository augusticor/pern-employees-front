import { GiAstronautHelmet } from 'react-icons/gi';
import { Link } from 'wouter';

export const NotFound = () => {
  return (
    <main className='h-screen flex justify-center items-center bg-gradient-to-r from-slate-900 via-blue-900 to-stone-900'>
      <div className='text-center text-white flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-bold'>Oops not found</h1>
        <h2 className='text-xl'>Are you lost ?</h2>

        <GiAstronautHelmet size={80} />

        <nav className='grid grid-rows-2 gap-6'>
          <button
            className='bg-zinc-900 border-2 border-stone-400 hover:text-sky-500'
            onClick={() => history.back()}
          >
            Go Back
          </button>

          <Link
            className='bg-zinc-900 border-2 border-stone-400 p-2 hover:text-sky-500'
            role='button'
            href='/employee/profile'
          >
            Get me out of here !
          </Link>
        </nav>
      </div>
    </main>
  );
};
