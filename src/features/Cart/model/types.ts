export interface ICart {
	cartCount: Array<{ id: number; quantity: number }>;
}

export interface ICategory {
	id: number;
	name: string;
	image: string;
	creationAt: string;
	updatedAt: string;
}

export interface ICartProduct {
	id: number;
	title: string;
	price: number;
	quantity: number;
	images: string[];
	name: string;

	description: string;
	category: ICategory;
	creationAt: string;
	updatedAt: string;
}