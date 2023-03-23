import { FcManager } from 'react-icons/fc';

export const Navbar = () => {
  return (
    <nav className='flex bg-sky-600'>
      <FcManager />
      {'Oscar'}
      <span>Manager</span>
    </nav>
  );
};
