import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../types/types';

const initialState: AuthState = {
    email: localStorage.getItem('email'),
  };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      localStorage.setItem('email', action.payload);
    },
    logout: (state) => {
      state.email = null;
      localStorage.removeItem('email');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
