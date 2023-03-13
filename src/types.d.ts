// Types:
type LoginUser = {
  email: string;
  password: string;
};

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

type APIError = { ok: false; msg: string };

// Interfaces:
interface RegisterUser extends LoginUser {
  firstName: string;
  lastName?: string;
  role: boolean;
}

interface User extends Omit<RegisterUser, 'password'> {
  readonly id: number;
  managerId: number | null;
}

interface AuthUserSuccessResponse {
  ok: true;
  employee: User;
}

// Exports
export { LoginUser, AuthStatus, RegisterUser, User, APIError, AuthUserSuccessResponse };
