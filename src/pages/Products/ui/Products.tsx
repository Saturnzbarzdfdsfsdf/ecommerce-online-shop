import React from 'react';

import { IProductsProps } from '../../../shared/types/index';

import styles from './Products.module.css';
import ProductItem from './ProductItem';

const Products: React.FC<IProductsProps> = ({
	title,
	style = {},
	products = [],
	amount,
}) => {
	const list = products.slice(0, amount);

	return (
		<section className={styles.products} style={style}>

			{title && <h2>{title}</h2>}

			<div className={styles.list}>
				{list.map(
					({ id, images = [], title, category, price }) => (
						<ProductItem
							key={id}
							id={id}
							images={images}
							title={title}
							category={category}
							price={price}
						/>
					)
				)}
			</div>
		</section>
	);
};

export default Products;
