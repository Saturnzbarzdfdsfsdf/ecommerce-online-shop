import { Link } from 'react-router-dom';

import { IProduct } from '../../../../shared/types/index';

import styles from '../Products.module.css';

const ProductItem: React.FC<IProduct> = ({
	id,
	images,
	title,
	category,
	price,
}) => (
	<Link className={styles.product} to={`/products/${id}`} key={id}>
		<div
			className={styles.image}
			style={{ backgroundImage: `url(${images[0]})` }}
		/>

		<div className={styles.wrapper}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.cat}>{category.name}</div>
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

export default ProductItem;