import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../../../redux/store';
import { filteredByPrice } from '../../../redux/products/productsSlice';

import { Products } from '../../Products/index';
import { Categories } from '../../Categories/index';
import { Poster } from '../../../widget/Poster/index';


const Home: React.FC = () => {
	const dispatch = useAppDispatch();

	const { list, filtered, categories } = useSelector((state: RootState) => ({
		list: state.products.list,
		filtered: state.products.filtered,
		categories: state.categories.list,
	}));


	useEffect(() => {
		if (list.length > 0 && filtered.length === 0) {
			dispatch(filteredByPrice(50))
		}
	}, [dispatch, list.length, filtered.length])

	return (
		<>
			<Poster />
			
			<Categories products={categories} amount={5} title='Two' /> 
			
			<Products products={list} amount={10} title='One' />

			{/* <ProductPagination products={list} /> */}
			
			{/* <Products products={filtered} amount={5} title='Three' /> */}
		</>
	);
};

export default Home;

