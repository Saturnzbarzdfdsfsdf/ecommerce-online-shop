import { IProduct } from '../../shared/api/product/index';

export interface IProductItem {
	id: number;
	images: string[];
	title: string;
	price: number;
	description: string;
}

export interface IProductsProps {
	title?: string;
	style?: React.CSSProperties;
	products?: IProduct[];
	amount?: number;
	currentPage: number;
}
