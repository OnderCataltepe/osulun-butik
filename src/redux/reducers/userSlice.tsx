import { createSlice } from '@reduxjs/toolkit';

export interface UserType {
  uid: string;
  name: string;
  surname: string;
  email: string;
  basket: { amount: number; id: string }[];
}

interface StateType {
  values: UserType;
  isAuth: boolean;
}

const values: UserType = {
  uid: '',
  name: '',
  surname: '',
  email: '',
  basket: [{ amount: 0, id: '' }]
};
const initialState = {
  isAuth: localStorage.getItem('isAuthenticated') || false,
  values
} as StateType;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.values = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.values = initialState.values;
      state.isAuth = false;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
