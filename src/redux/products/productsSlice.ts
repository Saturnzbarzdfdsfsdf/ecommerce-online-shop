import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { shuffle } from '../../shared/consts/common';
import { BASE_URL } from '../../shared/consts/baseUrl';
import { IProduct } from '../../pages/Home/ui/Home';

// Определяем интерфейс для продукта
// interface IProduct {
// 	id: string;
// 	name: string;
// 	price: number;
// 	image: string[];
// 	category: {
// 		id: string;
// 		name: string;
// 	};
// }

// Определяем интерфейс для состояния слайса
interface ProductsState {
	list: IProduct[];
	filtered: IProduct[];
	related: IProduct[];
	isLoading: boolean;
}

// Создаем асинхронное действие для получения продуктов
export const fetchProducts = createAsyncThunk<IProduct[], void>(
	'products/fetchProducts',
	async (_, thunkApi) => {
		try {
			const res = await axios.get(`${BASE_URL}/products`);
			return res.data as IProduct[]; // Убедитесь, что данные соответствуют типу Product[]
		} catch (err) {
			console.error(err);
			return thunkApi.rejectWithValue(err);
		}
	}
);

const initialState: ProductsState = {
	list: [],
	filtered: [],
	related: [],
	isLoading: false,
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		filteredByPrice: (state, action: PayloadAction<number>) => {
			state.filtered = state.list.filter(({ price }) => price < action.payload);
		},
		getRelatedProducts: (state, action: PayloadAction<string>) => {
			const list = state.list.filter(
				item => item.category && item.category.id === action.payload
			);
			state.related = shuffle(list);
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchProducts.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(
			fetchProducts.fulfilled,
			(state, action: PayloadAction<IProduct[]>) => {
				state.list = action.payload;
				state.isLoading = false;
			}
		);
		builder.addCase(fetchProducts.rejected, state => {
			state.isLoading = false;
		});
	},
});

export const { filteredByPrice, getRelatedProducts } = productsSlice.actions;

export default productsSlice.reducer;
