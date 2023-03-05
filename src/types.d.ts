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

interface User extends RegisterUser {
  readonly id: number;
}
