import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProducts } from './productThunk';

import { IProducts } from '../../shared/api/product/index';

import { IProductsState } from './types';

const initialState: IProductsState = {
	products: [],
	currentPage: 1,
	totalPages: 0,
	loading: false,
	error: null,
};

const productsSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
			state.loading = true;
		},
		setLoading(state, action: PayloadAction<boolean>) {
			state.loading = action.payload;
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
					action: PayloadAction<{ products: IProducts[]; totalPages: number }>
				) => {
					state.products = action.payload;
					state.totalPages = action.payload;
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

export const { setCurrentPage, setLoading } = productsSlice.actions;

export default productsSlice.reducer;
