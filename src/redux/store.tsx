import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';
import userSlice from './reducers/userSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
