import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useGetProductsQuery } from '../../../redux/api/apiSlice';

import { Products } from '../../Products/index';

import { Button } from '../../../shared/ui/Button';

import styles from './Category.module.css';

interface Product {
	id: string;
	name: string;
	image: string;
}

interface FilterValues {
	title: string;
	price_min: number;
	price_max: number;
}

interface QueryParams {
	categoryId: string | undefined;
	limit: number;
	offset: number;
}

interface CategoriesState {
	list: Array<{ id: string; name: string }>;
}

const Category: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const { list } = useSelector(
		({ categories }: { categories: CategoriesState }) => categories
	);

	const defaultValues: FilterValues = {
		title: '',
		price_min: 0,
		price_max: 0,
	};

	const defaultParams: QueryParams = {
		categoryId: id,
		limit: 5,
		offset: 0,
		...defaultValues,
	};

	// Заголовок категорий
	const [title, setTitle] = useState<string>('');

	// Пагинация
	const [pagination, setPagination] = useState<Product[]>([]);

	const [values, setValues] = useState<FilterValues>(defaultValues);

	const [params, setParams] = useState<QueryParams>(defaultParams);

	const { data, isLoading, isSuccess } = useGetProductsQuery(params);

	useEffect(() => {
		if (!isLoading) return;
		if (!Array.isArray(data)) return;

		const products = data as Product[];

		setPagination(pagination => [...pagination, ...products]);
	}, [data, isLoading]);

	useEffect(() => {
		if (!id) return;

		setParams({ ...defaultParams, categoryId: id });
	}, [id]);

	useEffect(() => {
		if (!id || !list.length) return;

		const category = list.find(
			item => item.id === (parseInt(id) || -1).toString()
		);
		if (category) {
			setTitle(category.name);
		}
	}, [list, id]);

	const loadMoreProducts = () => {
		setParams(prevParams => ({
			...prevParams,
			offset: prevParams.offset + prevParams.limit,
		}));
	};

	const handleChange = ({
		target: { value, name },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setParams({ ...params, ...values });
	};

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>{title}</h2>

			<form className={styles.filters} onSubmit={handleSubmit}>
				<div className={styles.filter}>
					<input
						type='text'
						name='title'
						onChange={handleChange}
						value={values.title}
						placeholder='Product name'
					/>

					<input
						type='number'
						name='price_min'
						onChange={handleChange}
						value={values.price_min}
						placeholder='0'
					/>

					<input
						type='number'
						name='price_max'
						onChange={handleChange}
						value={values.price_max}
						placeholder='0'
					/>
				</div>
				<button type='submit' hidden />
			</form>

			{isLoading ? (
				<div className='preloader'>Loading...</div>
			) : !isSuccess || !data.length ? (
				<div className={styles.back}>
					<span>No Results</span>
					<button>Reset</button>
				</div>
			) : (
				<Products
					title=''
					products={data}
					style={{ padding: 0 }}
					amount={data.length}
				/>
			)}

			<div className={styles.more}>
				<Button onClick={loadMoreProducts}>Search More</Button>
			</div>
		</section>
	);
};

export default Category;
