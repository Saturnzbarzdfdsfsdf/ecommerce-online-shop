import { ICategory } from "../../../shared/api/product";

export interface ICategoriesState {
	list: ICategory[];
	isLoading: boolean;
	error: string | null; 
}

export interface ICategoriesProps {
	products: ICategory[];
	title: string;
	amount: number;
}
