import React from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../redux/store';

import { sumBy } from '../../../shared/consts/common';

import { addItemToCart, removeItemFromCart } from '../../../redux/user/userSlice';

import styles from './Cart.module.css';


// Определяем интерфейс для продукта в корзине
interface CartItem {
	id: string;
	title: string;
	category: {
		name: string;
	};
	images: string[];
	price: number;
	quantity: number;
}

// Определяем интерфейс для состояния пользователя
interface UserState {
	cart: CartItem[];
}

const Cart: React.FC = () => {
	const dispatch = useAppDispatch();

	// Используем типизацию для селектора
	const { cart } = useSelector((state: { user: UserState }) => state.user);

	const updateCartItemQuantity = (item: CartItem, quantity: number) => {
		dispatch(addItemToCart({ ...item, quantity }));
	};

	const removeItem = (id: string) => {
		dispatch(removeItemFromCart(id));
	};

	return (
		<section className={styles.cart}>
			<h2 className={styles.title}>Your Cart</h2>

			{!cart.length ? (
				<div className={styles.empty}>Here is empty</div>
			) : (
				<>
					<div className={styles.list}>
						{cart.map(item => {
							const { title, category, images, price, id, quantity } = item;

							return (
								<div className={styles.item} key={id}>
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
										<div
											className={styles.minus}
											onClick={() =>
												updateCartItemQuantity(item, Math.max(1, quantity - 1))
											}
										>
											<svg>
												<use xlinkHref={'sprite.svg#minus'} />
											</svg>
										</div>

										<span>{quantity}</span>

										<div
											className={styles.plus}
											onClick={() =>
												updateCartItemQuantity(item, Math.max(1, quantity + 1))
											}
										>
											<svg>
												<use xlinkHref={'sprite.svg#plus'} />
											</svg>
										</div>
									</div>

									<div className={styles.total}>{price * quantity}</div>

									<div
										className={styles.close}
										onClick={() => removeItem(item.id)}
									>
										<svg>
											<use xlinkHref={'sprite.svg#close'} />
										</svg>
									</div>
								</div>
							);
						})}
					</div>

					<div className={styles.actions}>
						<div className={styles.total}>
							Total Price
							<span>
								{sumBy(cart.map(({ quantity, price }) => quantity * price))}$
							</span>
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default Cart;
