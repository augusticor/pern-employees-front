// Types:
type LoginUser = {
  email: string;
  password: string;
};

export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

// Interfaces:
interface RegisterUser extends LoginUser {
  firstName: string;
  lastName?: string;
  role: boolean;
}

interface User extends Omit<RegisterUser, 'password'> {
  readonly id: number;
}
