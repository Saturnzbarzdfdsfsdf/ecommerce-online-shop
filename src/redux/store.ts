import { configureStore } from '@reduxjs/toolkit';

// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// Импорт срезов (slices)

import categoriesSlice from './categories/categoriesSlice';
import productsSlice from './products/productsSlice';
import userSlice from './user/userSlice';
import { apiSlice } from './api/apiSlice';

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


// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

