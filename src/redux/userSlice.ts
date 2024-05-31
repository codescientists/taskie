import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  email: localStorage.getItem('email'),
  isAuthenticated: !!localStorage.getItem('email'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register(state, action: PayloadAction<{ email: string; password: string }>) {
      localStorage.setItem(action.payload.email, JSON.stringify({ password: action.payload.password, tasks: [] }));
      state.email = action.payload.email;
      state.isAuthenticated = true;
      localStorage.setItem('email', action.payload.email);
    },
    login(state, action: PayloadAction<{ email: string; password: string }>) {
      const userData = localStorage.getItem(action.payload.email);
      if (userData) {
        const user = JSON.parse(userData);
        if (user.password === action.payload.password) {
          state.email = action.payload.email;
          state.isAuthenticated = true;
          localStorage.setItem('email', action.payload.email);
        }
      }
    },
    logout(state) {
      state.email = null;
      state.isAuthenticated = false;
      localStorage.removeItem('email');
    },
  },
});

export const { register, login, logout } = userSlice.actions;

export default userSlice.reducer;
