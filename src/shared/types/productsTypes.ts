export interface IProductItem {
	id: string;
	images: string[];
	title: string;
	price: number;
	description: string;
}

export interface IProductsProps {
	title?: string
	style?: React.CSSProperties
	products?: IProduct[]
	amount: number
}


interface IProduct {
	id: string;
	images: string[];
	title: string;
	price: number;
	category: {
		id: string;
		name: string;
	};
}
