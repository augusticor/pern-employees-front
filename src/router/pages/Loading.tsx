import { Loader } from '../../Loader';

export const Loading = () => {
  return (
    <div className='h-screen bg-gradient-to-br from-lime-700 via-cyan-700 to-sky-700'>
      <Loader />
    </div>
  );
};
