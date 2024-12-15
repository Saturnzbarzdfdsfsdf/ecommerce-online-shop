import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../shared/consts/baseUrl';

// Определяем интерфейс для пользователя
interface User {
	id?: string;
	name: string;
	email: string;
}

// Определяем интерфейс для состояния слайса
interface UserState {
	currentUser: User | null;
	cart: Array<{ id: string; quantity: number }>;
	isLoading: boolean;
	showForm: boolean;
	formType: 'signup' | 'login';
}

// Создаем асинхронное действие для создания пользователя
export const createUser = createAsyncThunk<User, Partial<User>>(
	'users/createUser',
	async (payload, thunkApi) => {
		try {
			const res = await axios.post(`${BASE_URL}/users`, payload);

			return res.data;
		} catch (err: unknown) {
			if (axios.isAxiosError(err)) {
				// Проверяем, является ли err экземпляром AxiosError
				const errorMessage =
					err.response?.data?.message || err.message || 'Неизвестная ошибка';
				console.log(errorMessage);
				return thunkApi.rejectWithValue(errorMessage);
			} else {
				// Обработка других типов ошибок
				console.log('Произошла ошибка:', err);
				return thunkApi.rejectWithValue('Неизвестная ошибка');
			}
		}
	}
);

// Создаем асинхронное действие для входа пользователя
export const loginUser = createAsyncThunk<
	User,
	{ email: string; password: string }
>('users/loginUser', async (payload, thunkApi) => {
	try {
		const res = await axios.post(`${BASE_URL}/auth/login`, payload);
		const login = await axios.get(`${BASE_URL}/auth/profile`, {
			headers: {
				Authorization: `Bearer ${res.data.access_token}`,
			},
		});
		return login.data;
	} catch (err: unknown) {
		if (axios.isAxiosError(err)) {
			// Проверяем, является ли err экземпляром AxiosError
			const errorMessage =
				err.response?.data?.message || err.message || 'Неизвестная ошибка';
			console.log(errorMessage);
			return thunkApi.rejectWithValue(errorMessage);
		} else {
			// Обработка других типов ошибок
			console.log('Произошла ошибка:', err);
			return thunkApi.rejectWithValue('Неизвестная ошибка');
		}
	}
});

// Создаем асинхронное действие для обновления пользователя
export const updateUser = createAsyncThunk<
	User,
	Partial<User> & { id: string }
>('users/updateUser', async (payload, thunkApi) => {
	try {
		const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
		const login = await axios.get(`${BASE_URL}/auth/profile`, {
			headers: {
				Authorization: `Bearer ${res.data.access_token}`,
			},
		});
		return login.data;
	} catch (err: unknown) {
		if (axios.isAxiosError(err)) {
			// Проверяем, является ли err экземпляром AxiosError
			const errorMessage =
				err.response?.data?.message || err.message || 'Неизвестная ошибка';
			console.log(errorMessage);
			return thunkApi.rejectWithValue(errorMessage);
		} else {
			// Обработка других типов ошибок
			console.log('Произошла ошибка:', err);
			return thunkApi.rejectWithValue('Неизвестная ошибка');
		}
	}
});

// Функция для добавления текущего пользователя в состояние
const addCurrentUser = (state: UserState, { payload }: PayloadAction<User>) => {
	state.currentUser = payload;
};

// Начальное состояние
const initialState: UserState = {
	currentUser: null,
	cart: [],
	isLoading: false,
	showForm: false,
	formType: 'signup',
};

// Создаем слайс
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addItemToCart: (
			state,
			{
				payload,
			}: PayloadAction<{ id: string; quantity?: number;}>
		) => {
			let newCart = [...state.cart];
			
			const existingItem = state.cart.find(item => item.id === payload.id);

			if (existingItem) {
				newCart = newCart.map(item =>
					item.id === payload.id
						? { ...item, quantity: payload.quantity || item.quantity + 1 }
						: item
				);
			} else {
				newCart.push({ ...payload, quantity: 1 });
			}

			state.cart = newCart;
		},
		removeItemFromCart: (state, { payload }: PayloadAction<string>) => {
			state.cart = state.cart.filter(({ id }) => id !== payload);
		},
		toggleForm: (state, action: PayloadAction<boolean>) => {
			state.showForm = action.payload;
		},
		toggleFormType: (state, action: PayloadAction<'signup' | 'login'>) => {
			state.formType = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(createUser.fulfilled, addCurrentUser);
		builder.addCase(loginUser.fulfilled, addCurrentUser);
		builder.addCase(updateUser.fulfilled, addCurrentUser);
	},
});

// Экспортируем действия и reducers
export const { addItemToCart, toggleForm, toggleFormType, removeItemFromCart } =
	userSlice.actions;

export default userSlice.reducer;
