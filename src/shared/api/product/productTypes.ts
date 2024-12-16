export interface ICategory {
	readonly id?: number;
	readonly name?: string;
	readonly image: string;
}

export interface IProduct {
	readonly id: number;
	readonly price: number;
	readonly title: string;
	readonly images?: string[];
	readonly description?: string;
	readonly category?: ICategory;
}

