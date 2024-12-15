import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';

import { BASE_URL } from '../../shared/consts/baseUrl';

// Определяем интерфейс для категории
interface Category {
	id: string;
	name: string;
	image: string; // Добавьте другие поля, если необходимо
}

// Определяем интерфейс для состояния слайса
interface CategoriesState {
	list: Category[];
	isLoading: boolean;
	error: string | null; // Добавляем состояние для хранения ошибок
}

// Создаем асинхронное действие для получения категорий
export const fetchCategories = createAsyncThunk<Category[], void>(
	'categories/fetchCategories',
	async (_, thunkApi) => {
		try {
			// Запрос и лимит 6 категорий
			const res = await axios.get(`${BASE_URL}/categories?limit=6`);
			return res.data;
		} catch (err) {
			console.error(err);
			// Убедитесь, что ошибка имеет правильный формат
			const errorMessage = axios.isAxiosError(err)
				? err.message
				: 'Unknown error';
			return thunkApi.rejectWithValue(errorMessage);
		}
	}
);

// Начальное состояние
const initialState: CategoriesState = {
	list: [],
	isLoading: false,
	error: null, // Инициализируем состояние ошибки
};

// Создаем слайс
const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {}, // Если у вас есть обычные reducers, добавьте их здесь
	extraReducers: builder => {
		builder.addCase(fetchCategories.pending, state => {
			state.isLoading = true;
			state.error = null; // Сбрасываем ошибку при новом запросе
		});
		builder.addCase(
			fetchCategories.fulfilled,
			(state, action: PayloadAction<Category[]>) => {
				state.list = action.payload;
				state.isLoading = false;
			}
		);
		builder.addCase(fetchCategories.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload as string; // Сохраняем сообщение об ошибке
		});
	},
});

// Экспортируем reducers и действия (если есть)
export default categoriesSlice.reducer;

