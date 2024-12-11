// import { IProducts } from '../../shared/api/product/index';

export interface IProductsState {
	products: IProduct[];
	currentPage: number;
	totalPages: number;
	loading: boolean;
	error: string | null;
}

// убрать
export interface IProduct {
	id: string;
	images: string[];
	title: string;
	price: number;
	category: {
		id: string;
		name: string;
	};
}
