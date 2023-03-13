import { isAxiosError } from 'axios';
import { APIError, AuthUserSuccessResponse, LoginUser, RegisterUser } from '../types';
import employeesApi from './config';

export const loginService = async (
  user: LoginUser
): Promise<APIError | AuthUserSuccessResponse> => {
  try {
    const response = await employeesApi.post('/auth/login', user);
    const data: AuthUserSuccessResponse = response.data;

    return { ...data };
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.code === 'ERR_NETWORK')
        return { ok: false, msg: 'No internet. Try again later' };

      const responseError: APIError = error.response?.data;

      return { ...responseError };
    }

    return { ok: false, msg: 'Something unexpected happened. Try later' };
  }
};

export const registerService = (user: RegisterUser): APIError | AuthUserSuccessResponse => {
  return {
    ok: false,
    msg: '',
  };
};
