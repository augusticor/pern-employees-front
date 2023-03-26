import { FcBusinessman, FcManager } from 'react-icons/fc';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useAuthStore } from '../../store/useAuthStore';
import { NavBarLink } from './NavBarLink';

export const Navbar = () => {
  const firstname = useAuthStore((state) => state.user?.firstName);
  const role = useAuthStore((state) => state.user?.role);

  return (
    <nav className='grid grid-cols-4 px-14 bg-sky-600 text-xl text-neutral-100'>
      <div className='flex items-center col-span-2'>
        {role ? <FcBusinessman size={35} /> : <FcManager size={35} />}
        {firstname || 'User'}
        <strong className='ml-1'>{role ? '- Manager' : '- Employee'}</strong>
      </div>

      <div className='flex justify-evenly items-center'>
        <NavBarLink href='/employee/colleagues'>Colleagues</NavBarLink>

        <NavBarLink href='/employee/profile'>Profile</NavBarLink>
      </div>

      <button className='flex items-center gap-3 justify-self-end hover:text-pink-600'>
        <RiLogoutCircleRLine fill='#f43f5e' size={25} />
        Logout
      </button>
    </nav>
  );
};
