import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCategories, ICategory } from '../../../shared/api/categories/index';

import { ErrorType, RejectedDataType } from '../../../shared/types/index';

export const fetchCategories = createAsyncThunk<
	{ list: ICategory[] },
	void,
	{ readonly rejectValue: RejectedDataType }
>('categories/fetchProducts', async (_, thunkAPI) => {
	const limit = 5;

	try {

		const response = await getCategories(limit);
		return { list: response };

	} catch (err: unknown) {
		const knownError = err as ErrorType;

		return thunkAPI.rejectWithValue({
			messageError: knownError.message || 'Unexpected error',
			status: knownError.response?.status,
		} as RejectedDataType);
	}
});
