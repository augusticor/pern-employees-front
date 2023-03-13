import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { loginService } from '../services/auth';
import { AuthStatus, LoginUser, User } from '../types';

interface AuthProps {
  authStatus: AuthStatus;
  errorMessage: string | null;
  user: User | null;
}

interface AuthActions {
  login: (loginInfo: LoginUser) => Promise<void>;
}

const initialState: AuthProps = {
  authStatus: 'not-authenticated',
  errorMessage: null,
  user: null,
};

export const useAuthStore = create<AuthProps & AuthActions>()(
  devtools(
    (set) => {
      return {
        // Props
        ...initialState,

        // Actions
        login: async (loginInfo) => {
          set({ authStatus: 'checking' });

          const loginResponse = await loginService(loginInfo);

          if (loginResponse.ok) {
            set({
              authStatus: 'authenticated',
              errorMessage: null,
              user: loginResponse.employee,
            });
          } else {
            set({ authStatus: 'not-authenticated', errorMessage: loginResponse.msg });
          }
        },
      };
    },
    { name: 'auth-store' }
  )
);
