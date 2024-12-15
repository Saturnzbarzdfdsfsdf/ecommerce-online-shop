import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../shared/lib/Hook/Hooks';

import { RootState } from '../../../app/store';

import { fetchCategories } from '../../../redux/categories/categoriesSlice';
import { fetchProducts } from '../../../entities/product/model/productThunk';
import { setCurrentPage } from '../../../entities/product/model/productsSlice';

// selectors
import {
	selectProducts,
	// selectFilteredProducts,
	selectCurrentPage,
} from '../../../entities/product/model/selectors';

// components
import { Products } from '../../Products/index';
import { Categories } from '../../Categories/index';
import { Poster } from '../../../widget/Poster/index';
import { Pagination } from '@mui/material';

const Home: React.FC = () => {
	const dispatch = useAppDispatch();

	const { categories } = useSelector((state: RootState) => ({
		categories: state.categories.list,
	}));

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
