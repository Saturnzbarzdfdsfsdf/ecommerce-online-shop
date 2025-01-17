import { apiGet } from '../base';

import { IProduct } from './productTypes';

const PRODUCTS_ENDPOINT = 'products';

export const getProducts = async (
	offset: number,
	limitProduct: number
): Promise< IProduct[]> => {
	return await apiGet(
		`${PRODUCTS_ENDPOINT}?offset=${offset}&limit=${limitProduct}`
	);
};
