import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/store';
import { useNavigate, useParams } from 'react-router-dom';

// redux api slice
import { useGetProductQuery } from '../../../redux/api/apiSlice';
import { getRelatedProducts } from '../../../redux/products/productsSlice';

import { ROUTES } from '../../../shared/consts/routes';

import { Product, Products } from '../../Products/index';


const SingleProduct: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	// Типизация параметра id
	const { id } = useParams<{ id: string }>();

	const { list, related } = useSelector((state: RootState) => ({
		list: state.products.list,
		related: state.products.related,
	}));

	// isLoading, isFetching, isSuccess встроено в apiSlice
	const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

	// Получение связанных продуктов при успешной загрузке
	useEffect(() => {
		if (data && list.length) {
			dispatch(getRelatedProducts(data.category.id));
		}
	}, [data, dispatch, list.length]);

	// Навигация при неуспешной загрузке данных
	useEffect(() => {
		if (!isFetching && !isLoading && !isSuccess) {
			navigate(ROUTES.HOME);
		}
	}, [isLoading, isFetching, isSuccess, navigate]);

	if (!data) {
		return <section className='preloader'>Loading...</section>;
	}

	return (
		<>
			<Product {...data} />
			<Products products={related} amount={5} title='Related Products' />
		</>
	);
};

export default SingleProduct;
