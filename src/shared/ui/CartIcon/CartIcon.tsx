import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICart } from '../../../features/Cart';

import styles from './CartIcon.module.css';


const CartIcon: FC<ICart> = ({ cartCount }) => {
	const totalQuantity = Array.isArray(cartCount)
		? cartCount.reduce((acc, item) => acc + (item.quantity || 0), 0)
		: 0;

	return (
		<div className={styles.account}>
			<Link className={styles.favorites} to='/favorites'>
				<svg className={styles['icon-fav']}>
					<use xlinkHref={'sprite.svg#heart'} />
				</svg>
			</Link>

			<Link className={styles.cart} to='/cart'>
				<svg className={styles['icon-cart']}>
					<use xlinkHref={'sprite.svg#bag'} />
				</svg>

				{totalQuantity > 0 && (
					<span className={styles.count}>{totalQuantity}</span>
				)}
			</Link>
		</div>
	);
};

export default CartIcon;
