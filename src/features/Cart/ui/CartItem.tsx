import React from 'react';

import { ICartProduct } from '../index';

import styles from './Cart.module.css';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface CartItemProps {
	item: ICartProduct;
	onUpdateQuantity: (item: ICartProduct, quantity: number) => void;
	onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
	item,
	onUpdateQuantity,
	onRemove,
}) => {
	const { title, category, images, price, id, quantity } = item;

	return (
		<div className={styles.item}>
			<div
				className={styles.image}
				style={{ backgroundImage: `url(${images[0]})` }}
			/>
			<div className={styles.info}>
				<h3 className={styles.name}>{title}</h3>
				<div className={styles.category}>{category.name}</div>
			</div>
			<div className={styles.price}>{price}$</div>
			<div className={styles.quantity}>
				<button
					className={styles.minus}
					onClick={() => onUpdateQuantity(item, Math.max(1, quantity - 1))}
				>
					-
				</button>
				<span>{quantity}</span>
				<button
					className={styles.plus}
					onClick={() => onUpdateQuantity(item, quantity + 1)}
				>
					+
				</button>
			</div>
			<div className={styles.total}>{price * quantity}</div>
			<IconButton className={styles.close} onClick={() => onRemove(id)}>
				<ClearIcon/>
			</IconButton>
		</div>
	);
};

export default CartItem;
