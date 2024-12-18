import React from 'react';

import { ProductCard } from '../../../entities/index';

import { IProductsProps } from '../../../entities/product/index';

import styles from './Products.module.css';

const Products: React.FC<IProductsProps> = ({ title, products }) => {
	return (
		<section className={styles.products}>
			{title && <h2>{title}</h2>}

			<div className={styles.list}>
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default Products;
