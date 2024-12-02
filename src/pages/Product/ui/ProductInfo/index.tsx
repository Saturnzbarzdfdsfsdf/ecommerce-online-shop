import { FC } from 'react';

import { IProductItem } from '../../../../shared/types';

import styles from '../Product.module.css';

type TProductDesc = Pick<IProductItem, 'title' | 'price' | 'description'>;

const ProductInfo: FC<TProductDesc> = ({ title, price, description }) => (
	<div className={styles.info}>
		<h1 className={styles.title}>{title}</h1>
		<p className={styles.price}>{price} $</p>
		<p className={styles.description}>{description}</p>
	</div>
);

export default ProductInfo;
