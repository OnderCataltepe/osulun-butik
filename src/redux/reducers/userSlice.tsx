import { createSlice } from '@reduxjs/toolkit';

export interface BasketType {
  amount: number;
  id: string;
  price: number;
  name: string;
  image: string;
}
export interface UserType {
  uid: string;
  name: string;
  surname: string;
  email: string;
  basket: BasketType[];
}

interface StateType {
  values: UserType;
  isAuth: boolean;
}

const basketStorage = localStorage.getItem('basket');
const array = basketStorage && (JSON.parse(basketStorage) as BasketType[]);
const values: UserType = {
  uid: '',
  name: '',
  surname: '',
  email: '',
  basket: array || []
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
    },
    userBasket: (state, action) => {
      state.values.basket = action.payload;
    }
  }
});

export const { login, logout, userBasket } = userSlice.actions;

export default userSlice.reducer;
