import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { AuthStatus, LoginUser, User } from '../types';

interface AuthProps {
  authStatus: AuthStatus;
  errorMessage: string | null;
  user: User | null;
}

interface AuthActions {
  login: (loginInfo: LoginUser) => void;
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

          set({
            authStatus: 'authenticated',
            user: { ...loginInfo, firstName: '', lastName: '', id: 1, role: false },
          });
        },
      };
    },
    { name: 'auth-store' }
  )
);
