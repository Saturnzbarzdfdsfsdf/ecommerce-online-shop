import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserState, IUser } from '../../../shared/api/user/index';

import { 
	createUserThunk,
	updateUserThunk, 
	loginUserThunk 
} from './userThunks';

// Функция для добавления текущего пользователя в состояние
const addCurrentUser = (
	state: IUserState,
	{ payload }: PayloadAction<IUser>
) => {
	state.currentUser = payload;
};

// Начальное состояние
const initialState: IUserState = {
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
			{ payload }: PayloadAction<{ id: string; quantity?: number }>
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
		builder.addCase(createUserThunk.fulfilled, addCurrentUser);
		builder.addCase(loginUserThunk.fulfilled, addCurrentUser);
		builder.addCase(updateUserThunk.fulfilled, addCurrentUser);
	},
});

// Экспортируем действия и reducers
export const { addItemToCart, toggleForm, toggleFormType, removeItemFromCart } =
	userSlice.actions;

export default userSlice.reducer;
