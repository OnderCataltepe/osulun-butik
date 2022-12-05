import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase/config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export interface ProductData {
  id: string;
  name: string;
  description: string;
  category: string[];
  price: number;
  amount: number;
  images: string[];
}

interface ProductState {
  values: ProductData[];
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
}

const initialState = {
  values: [],
  loading: 'idle'
} as ProductState;

export const getProducts = createAsyncThunk('product/get', async () => {
  const datas: any[] = [];
  const ref = collection(db, 'products');
  await getDocs(ref).then((snap) => {
    snap.forEach((doc) =>
      datas.push({
        id: doc.id,
        ...doc.data()
      })
    );
  });
  return datas;
});

export const deleteProduct = createAsyncThunk('product/delete', async (id: string) => {
  const ref = doc(db, 'products', id);
  await deleteDoc(ref);
  return id;
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductData[]>) => {
      state.values = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.values = action.payload;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const newSet = state.values.filter((item) => item.id !== action.payload);
      state.values = newSet;
    });
  }
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
