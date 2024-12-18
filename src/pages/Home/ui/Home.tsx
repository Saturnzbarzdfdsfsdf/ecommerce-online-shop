import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../shared/lib/Hook/Hooks';

import { fetchCategories } from '../../../entities/categories/index';
import {
	setCurrentPage,
	fetchProducts,
	selectProducts,
	selectCurrentPage,
} from '../../../entities/product/index';

import { selectCategories } from '../../../entities/categories';

// components
import { Products } from '../../Products/index';
import { Categories } from '../../../features/categories/index';
import { Poster } from '../../../widget/Poster/index';
import { Pagination } from '@mui/material';

const Home: React.FC = () => {
	const dispatch = useAppDispatch();

	const categories = useSelector(selectCategories);

	const products = useSelector(selectProducts);

	const currentPage = useSelector(selectCurrentPage);

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchProducts(currentPage.toString()));
	}, [dispatch, currentPage]);

	const handlePageChange = (
		_event: React.ChangeEvent<unknown>,
		value: number
	) => {
		dispatch(setCurrentPage(value));
		dispatch(fetchProducts(value.toString()));
	};

	return (
		<>
			<Poster />

			<Categories products={categories} amount={5} title='Categories' />

			<Products title='Products' products={products} />

			<Pagination
				count={products.length}
				page={currentPage}
				onChange={handlePageChange}
				variant='outlined'
				color='primary'
			/>
		</>
	);
};

export default Home;
