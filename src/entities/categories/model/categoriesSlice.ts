import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchCategories } from './categoriesThunk';

import { ICategoriesState } from './types';
import { ICategory } from '../../../shared/api/product';

const initialState: ICategoriesState = {
	list: [],
	isLoading: false,
	error: null,
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchCategories.pending, state => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(
			fetchCategories.fulfilled,
			(state, action: PayloadAction<{ list: ICategory[] }>) => {
				state.list = action.payload;
				state.isLoading = false;
			}
		);
		builder.addCase(fetchCategories.rejected, (state, action) => {
			state.isLoading = false;
			if (action.payload) {
				state.error = action.payload.messageError;
			}
		});
	},
});

export default categoriesSlice.reducer;
