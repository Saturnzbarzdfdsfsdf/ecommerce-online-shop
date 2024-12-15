import { IProduct } from '../../../shared/api/product/index';

export interface IProductsState {
	products: IProduct[];
	currentPage: number;
	totalPages: number;
	loading: boolean;
	error: string | null;
	filtered: IProduct[]; 
	related: IProduct[]; 
}
