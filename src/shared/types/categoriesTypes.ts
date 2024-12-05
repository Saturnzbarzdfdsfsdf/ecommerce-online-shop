interface IProduct {
	id: string
	name: string
	image: string
}

export interface ICategoriesProps {
	title: string
	products?: IProduct[]
	amount: number
}
