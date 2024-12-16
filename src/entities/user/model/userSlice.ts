import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserState, IUser } from '../../../shared/api/user/index';

import { createUserThunk, updateUserThunk, loginUserThunk } from './userThunks';

// Функция для добавления текущего пользователя в состояние
// const updateCurrentUser = (
// 	state: IUserState,
// 	action: PayloadAction<{ user: IUser }>
// ) => {
// 	state.currentUser = action.payload.user;
// };

const updateCurrentUser = (
	state: IUserState,
	{ payload }: PayloadAction<{ user: IUser }>
) => {
	state.currentUser = payload.user;
};

const initialState: IUserState = {
	cart: [],

	currentUser: null,
	isLoading: false,
	showForm: false,
	formType: 'signup',
};

// Создаем слайс
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		toggleForm: (state, action: PayloadAction<boolean>) => {
			state.showForm = action.payload;
		},
		toggleFormType: (state, action: PayloadAction<'signup' | 'login'>) => {
			state.formType = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(createUserThunk.fulfilled, updateCurrentUser);
		builder.addCase(loginUserThunk.fulfilled, updateCurrentUser);
		builder.addCase(updateUserThunk.fulfilled, updateCurrentUser);
	},
});

// Экспортируем действия и reducers
export const { toggleForm, toggleFormType } = userSlice.actions;

export default userSlice.reducer;
