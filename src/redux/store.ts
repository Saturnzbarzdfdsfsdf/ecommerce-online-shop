import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// Импорт срезов (slices)
import categoriesSlice from './categories/categoriesSlice';
import productsSlice from './products/productsSlice';
import userSlice from './user/userSlice';
import { apiSlice } from './api/apiSlice';

// Определяем интерфейсы для состояний каждого среза
export interface CategoriesState {
	// Определите поля состояния для categories
	list: Array<{ id: string; name: string; image: string }>;
}

export interface ProductsState {
	// Определите поля состояния для products
	list: Array<{ id: string; name: string; price: number; image: string }>;
}

export interface UserState {
	// Определите поля состояния для user
	id: string | null;
	name: string | null;
}

// export interface RootState {
// 	categories: CategoriesState;
// 	products: ProductsState;
// 	user: UserState;
// 	[apiSlice.reducerPath]: ReturnType<typeof apiSlice.reducer>;
// }

// Конфигурируем store
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

// Типы для dispatch и state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Создаем типизированные хуки
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// import { configureStore } from '@reduxjs/toolkit';

// // Импорт срезов (slices)
// import categoriesSlice from './categories/categoriesSlice';
// import productsSlice from './products/productsSlice';
// import userSlice from './user/userSlice';
// // slice для управления API-запросами с использованием createApi.
// import { apiSlice } from './api/apiSlice';

// export const store = configureStore({
// 	// Определяем корневые редюсеры для вашего состояния.
// 	reducer: {
// 		categories: categoriesSlice,
// 		products: productsSlice,
// 		user: userSlice,
// 		// Это позволяет динамически устанавливать путь редюсера, который был определен в createApi.
// 		[apiSlice.reducerPath]: apiSlice.reducer,
// 	},
// 	// Добавляется миддлвар из apiSlice, который отвечает за обработку асинхронных запросов и кеширование данных.
// 	middleware: getMiddleware => getMiddleware().concat(apiSlice.middleware),
// });

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
