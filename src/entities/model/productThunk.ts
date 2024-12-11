import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProducts, IProduct } from '../../shared/api/product';
import { ErrorType, RejectedDataType } from '../../shared/types/index';

export const fetchProducts = createAsyncThunk<
	{ products: IProduct[]; totalPages: number }, // при успешном запросе вернется obj
	string,
	{ readonly rejectValue: RejectedDataType } // Вернется в случае ошибки
>('products/fetchProducts', async (_, thunkAPI) => {
	const limit = 10;
	// const offset = (parseInt(page) - 1) * limit; // опционально

	try {
		const response = await getProducts(limit);
		return response;
	} catch (err: unknown) {
		const knownError = err as ErrorType;

		return thunkAPI.rejectWithValue({
			messageError: knownError.message,
			status: knownError.response?.status, // Статус ответа от сервера (есть доступен)
		});
	}
});
