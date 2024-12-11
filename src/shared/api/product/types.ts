interface ICategory {
	readonly category: {
		id: number;
		name?: string;
		image: string;
	};
}

export interface IProduct {
	readonly id: number;
	readonly price: number;
	readonly title: string;
	readonly images?: string[];
	readonly description?: string;
	readonly category?: ICategory;
}
