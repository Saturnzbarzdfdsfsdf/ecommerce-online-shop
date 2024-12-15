import { configureStore } from '@reduxjs/toolkit';

// Импорт срезов (slices)
import productsSlice from '../entities/model/productsSlice';

// import productsSlice from '../redux/products/productsSlice';
import categoriesSlice from '../redux/categories/categoriesSlice';
import userSlice from '../redux/user/userSlice';

import { apiSlice } from '../redux/api/apiSlice'

export const store = configureStore({
	reducer: {
		categories: categoriesSlice,
		products: productsSlice,
		user: userSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
