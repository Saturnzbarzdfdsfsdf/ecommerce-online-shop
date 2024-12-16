import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProducts } from './productThunk';

import { shuffle } from '../../../shared/consts/common';

import { IProduct } from '../../../shared/api/product/index';
import { IProductsState } from './productTypes';

const initialState: IProductsState = {
	products: [],
	filtered: [],
	related: [],

	currentPage: 1,
	totalPages: 0,
	loading: false,
	error: null,
};

const productsSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setLoading(state, action: PayloadAction<boolean>) {
			state.loading = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
			state.loading = true;
		},
		setRelatedProducts(state, action: PayloadAction<number>) {
			const list = state.products.filter(
				item => item.category && item.category.id === action.payload
			);
			state.related = shuffle(list);
		},
		filterProductsByPrice(state, action: PayloadAction<number>) {
			state.filtered = state.products.filter(
				({ price }) => price < action.payload
			);
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				fetchProducts.fulfilled,
				(
					state,
					action: PayloadAction<{ products: IProduct[]; totalPages: number }>
				) => {
					state.products = action.payload;
					// state.totalPages = action.payload;
					state.loading = false;
				}
			)
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				if (action.payload) {
					state.error = action.payload.messageError;
				}
			});
	},
});

export const {
	setCurrentPage,
	setLoading,
	filterProductsByPrice,
	setRelatedProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
