import React, { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useGetProductQuery } from '../../../redux/api/apiSlice';

import { ROUTES } from '../../../shared/consts/routes';

import {
	selectProducts,
	selectRelatedProducts,
} from '../../../entities/model/selectors';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../shared/lib/Hook/Hooks';

import { Product } from '../../Product/index';
import { Products } from '../../Products/index';
import { setRelatedProducts } from '../../../entities/model/productsSlice';

const SingleProduct: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { id } = useParams<{ id: string }>();

	const relatedProducts = useSelector(selectRelatedProducts);
	const products = useSelector(selectProducts);

	const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

	useEffect(() => {
		if (data && products.length) {
			dispatch(setRelatedProducts(data.category.id));
		}
	}, [data, dispatch, products.length]);

	useEffect(() => {
		if (!isFetching && !isLoading && !isSuccess) {
			navigate(ROUTES.HOME);
		}
	}, [isLoading, isFetching, isSuccess, navigate]);

	if (isLoading || isFetching) {
		return (
			<section className='preloader'>
				<div className='spinner'>Loading...</div>
			</section>
		);
	}

	return (
		<>
			<Product {...data} />
			<Products
				products={relatedProducts}
				amount={5}
				title='Related Products'
			/>
		</>
	);
};

export default SingleProduct;
