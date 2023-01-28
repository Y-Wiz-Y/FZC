import { configureStore } from '@reduxjs/toolkit';
import productBlock from './slices/productBlock';
import basket from './slices/card';

export const store = configureStore({
  reducer: {
    product: productBlock,
    basket: basket,
  },
});
