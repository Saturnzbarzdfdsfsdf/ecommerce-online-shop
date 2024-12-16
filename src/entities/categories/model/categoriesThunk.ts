import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCategories, ICategory } from '../../../shared/api/categories/index';

import { ErrorType, RejectedDataType } from '../../../shared/types/index';

export const fetchCategories = createAsyncThunk<
	{ categories: ICategory[] },
	string,
	{ readonly rejectValue: RejectedDataType } // Вернется в случае ошибки
>('categories/fetchProducts', async (_, thunkAPI) => {
	const limit = 5;

	try {
		const response = await getCategories(limit);

		return response;
	} catch (err: unknown) {
		const knownError = err as ErrorType;

		return thunkAPI.rejectWithValue({
			messageError: knownError.message,
			status: knownError.response?.status,
		});
	}
});
