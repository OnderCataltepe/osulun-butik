import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase/config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import type { ProductType } from '../../types/types';

interface ProductState {
  values: ProductType[];
  loading: boolean;
}

const initialState = {
  values: [],
  loading: false
} as ProductState;

export const getProducts = createAsyncThunk('product/get', async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    setProduct: (state, action: PayloadAction<ProductType[]>) => {
      state.values = action.payload;
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.values = action.payload;
      state.loading = false;
    });
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const newSet = state.values.filter((item) => item.id !== action.payload);
      state.values = newSet;
      state.loading = false;
    });
  }
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
