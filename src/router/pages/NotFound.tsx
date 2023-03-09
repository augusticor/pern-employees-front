import { Link } from 'wouter';

export const NotFound = () => {
  return (
    <>
      <h1>Oops not found</h1>

      <Link href='/employee/profile'>Return</Link>
    </>
  );
};
