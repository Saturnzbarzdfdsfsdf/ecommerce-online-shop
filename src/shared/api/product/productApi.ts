import { apiGet } from '../base';

import { IProduct } from './types';

const PRODUCTS_ENDPOINT = 'products';

export const getProducts = async (
	// offset: number, //offset=10 API пропустит первые 10 опционально
	limitProduct: number
): Promise<{ products: IProduct[]; totalPages: number }> => {
	return await apiGet(
		`${PRODUCTS_ENDPOINT}?&limit=${limitProduct}`
	);
};
