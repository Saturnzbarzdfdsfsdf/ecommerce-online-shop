import { configureStore } from '@reduxjs/toolkit';

// Импорт срезов (slices)
import productsSlice from '../entities/product/model/productsSlice';

import categoriesSlice from '../redux/categories/categoriesSlice';

import userSlice from '../entities/user/model/userSlice';
import cartSlice from '../features/Cart/model/cartSlices';

import { apiSlice } from '../redux/api/apiSlice'

export const store = configureStore({
	reducer: {
		products: productsSlice,
		categories: categoriesSlice,
		user: userSlice,
		cart: cartSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
