import { apiGet } from '../base';

import { ICategory } from './typeApi';

const CATEGORIES_ENDPOINT = 'categories';

export const getCategories = async (
	limit: number
): Promise<{ categories: ICategory[] }> => {
	return await apiGet(`${CATEGORIES_ENDPOINT}?limit=${limit}`);
};
