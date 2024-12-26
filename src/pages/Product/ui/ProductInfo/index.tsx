import { FC } from 'react';

import { IProduct } from '../../../../shared/api/product/index';

import styles from '../Product.module.css';

type TProductDesc = Pick<IProduct, 'title' | 'price' | 'description'>;

const ProductInfo: FC<TProductDesc> = ({ title, price, description }) => (
	<div className={styles.info}>
		<h1 className={styles.title}>{title}</h1>
		<p className={styles.price}>{price} $</p>
		<p className={styles.description}>{description}</p>
	</div>
);

export default ProductInfo;
