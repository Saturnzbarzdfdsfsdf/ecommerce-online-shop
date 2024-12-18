import { ICategory } from "../../../shared/api/product";

export interface ICategoriesState {
	list: ICategory[];
	isLoading: boolean;
	error: string | null; 
}

export interface ICategoriesProps {
	title: string;
	products?: ICategory[];
	amount: number;
}
