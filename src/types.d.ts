// Types:
type LoginUser = {
  email: string;
  password: string;
};

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

type APIError = { ok: false; msg: string };

// Types for useForm
// Login form
type keysOfLogin = keyof LoginUser;

type typeOfKeysOfLogin = LoginUser[keyof LoginUser];

type loginFormValidationType = [(formElementToEvaluate: typeOfKeysOfLogin) => boolean, string];

type loginFormValidationsObjectType = Record<keysOfLogin, loginFormValidationType>;

// Register form
type keysOfRegister = keyof RegisterUser;

type typeOfKeysOfRegister = RegisterUser[keyof RegisterUser];

type registerFormValidationType = [(element: typeOfKeysOfRegister) => boolean, string];

type registerFormValidationsObjectType = Record<keysOfRegister, registerFormValidationType>;

// Interfaces:
interface RegisterUser extends LoginUser {
  firstName: string;
  lastName?: string;
  role: boolean = false;
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
export {
  LoginUser,
  AuthStatus,
  APIError,
  loginFormValidationsObjectType,
  registerFormValidationsObjectType,
  RegisterUser,
  User,
  AuthUserSuccessResponse,
};
