import { Link } from 'react-router-dom';

import { IProductCard } from '../../shared/api/product/index';

import styles from './ProductCard.module.css';

const ProductCard: React.FC<IProductCard> = ({ product }) => {
	const { id, title, price, images, category } = product;

	return (
		<Link className={styles.product} to={`/products/${id}`}>
			<div
				className={styles.image}
				style={{
					backgroundImage:
						images && images.length > 0 ? `url(${images[0]})` : 'none',
				}}
			/>

			<div className={styles.wrapper}>
				<h3 className={styles.title}>{title}</h3>
				{category && <div className={styles.category}>{category.name}</div>}
				<div className={styles.info}>
					<div className={styles.prices}>
						<div className={styles.price}>{price} $</div>
						<div className={styles.oldPrices}>{Math.floor(price * 0.8)} $</div>
					</div>
					<div className={styles.purchases}>1 bought</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
