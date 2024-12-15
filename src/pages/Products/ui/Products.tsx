import React from 'react';

import { IProductsProps } from '../../../shared/types/index';

import { ProductCard } from '../../../entities/index';

import styles from './Products.module.css';

const Products: React.FC<IProductsProps> = ({
	title,
	style = {},
	products = [],
}) => {
	return (
		<section className={styles.products} style={style}>
			{title && <h2>{title}</h2>}

			<div className={styles.list}>
				{products.map(({ id, images = [], title, category, price }) => (
					<ProductCard
						key={id}
						id={id}
						images={images}
						title={title}
						category={category}
						price={price}
					/>
				))}
				<div className='pagination__box'></div>
			</div>
		</section>
	);
};

export default Products;
