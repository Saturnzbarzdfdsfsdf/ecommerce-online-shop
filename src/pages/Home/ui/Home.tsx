import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// Импортируйте тип корневого состояния
import { RootState, useAppDispatch } from '../../../redux/store';
import { filteredByPrice } from '../../../redux/products/productsSlice';

import { Products } from '../../Products/index';
import { Categories } from '../../Categories/index';
import { Poster } from '../../../widget/Poster/index';

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

const Home: React.FC = () => {
	const dispatch = useAppDispatch();

	// Типизация состояния из Redux
	const { list, filtered, categories } = useSelector((state: RootState) => ({
		list: state.products.list,
		filtered: state.products.filtered,
		categories: state.categories.list,
	}));


	useEffect(() => {
		if (list.length > 0) {
			// Передаем в функцию фильтрации стоимость
			dispatch(filteredByPrice(50));
		}
	}, [dispatch, list.length]);

	return (
		<>
			<Poster />
			<Products products={list} amount={5} title='One' />
			<Categories products={categories} amount={5} title='Two' />
			{/* <Banner /> */}
			<Products products={filtered} amount={5} title='Three' />
		</>
	);
};

export default Home;


			// <Products products={filtered as IProduct[]} amount={5} title='Three' />;