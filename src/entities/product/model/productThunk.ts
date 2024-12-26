import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProducts, IProduct } from '../../../shared/api/product';
import { ErrorType, RejectedDataType } from '../../../shared/types/index';

export const fetchProducts = createAsyncThunk<
	{ products: IProduct[]; }, // при успешном запросе вернется obj
	string,
	{ readonly rejectValue: RejectedDataType } // Вернется в случае ошибки
>('products/fetchProducts', async (page, thunkAPI) => {
	
	const limitProduct = 5;
	const offset = (parseInt(page) - 1) * limitProduct; 

	try {

		const response = await getProducts(offset, limitProduct);

		return { products: response };

	} catch (err: unknown) {
		const knownError = err as ErrorType;

		return thunkAPI.rejectWithValue({
			messageError: knownError.message || 'Unexpected error',
			status: knownError.response?.status,
		} as RejectedDataType);
	}
});
