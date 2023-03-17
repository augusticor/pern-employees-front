// Types:
type LoginUser = {
  email: string;
  password: string;
};

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

type APIError = { ok: false; msg: string };

// Types for useForm
type keysOfLogin = keyof LoginUser;

type typeOfKeysOfLogin = LoginUser[keyof LoginUser];

type loginFormValidationType = [(formElementToEvaluate: typeOfKeysOfLogin) => boolean, string];

type loginFormValidationsObjectType = Record<keysOfLogin, loginFormValidationType>;

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

interface iFormCheckedValues {
  [key: string]: null | string;
}

// Exports
export {
  LoginUser,
  AuthStatus,
  RegisterUser,
  User,
  APIError,
  AuthUserSuccessResponse,
  iFormCheckedValues,
  keysOfLogin,
  loginFormValidationsObjectType,
};
