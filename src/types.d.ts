// Types:
export type LoginUser = {
  email: string;
  password: string;
};

export type RegisterUser = {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  role: boolean;
};

export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

// Interfaces:
interface User extends RegisterUser {
  readonly id: number;
}
