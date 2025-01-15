import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userName: null,
  },
  reducers: {
    login: (state, action) => {
      state.userName = action.payload;
    },
    logout: (state) => {
      state.userName = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
