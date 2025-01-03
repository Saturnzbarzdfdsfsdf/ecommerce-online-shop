import { IProduct } from '../../../shared/api/product/index';

export interface IProductsState {
	products: IProduct[];
	currentPage: number;
	loading: boolean;
	error: string | null;
	filtered: IProduct[]; 
	related: IProduct[]; 
}

export interface IProductsProps {
	title: string;
	products: IProduct[];
}

export interface IProductCard {
	product: IProduct;
}
