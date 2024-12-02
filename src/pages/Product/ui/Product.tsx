import React, { useState, FC, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../../redux/store';
import { addItemToCart } from '../../../redux/user/userSlice';

import { ROUTES } from '../../../shared/consts/routes';
import { Button } from '../../../shared/ui/button/index';

import { IProductItem } from '../../../shared/types';

import styles from './Product.module.css';

const SIZES = [42, 46, 48, 50, 52];

const Product: FC<IProductItem> = React.memo(item => {
	const { images, title, price, description } = item;

	const dispatch = useAppDispatch();

	const [currentImage, setCurrentImage] = useState<string | null>(null);
	const [currentSize, setCurrentSize] = useState<number | null>(null);

	useEffect(() => {
		if (images.length > 0) {
			setCurrentImage(images[0]);
		}
	}, [images]);

	const onClickSetSize = useCallback((size: number | null) => {
		setCurrentSize(size);
	}, []);

	const onClickSetCurrentImage = useCallback((image: string | null) => {
		setCurrentImage(image);
	}, []);

	const onClickAddCart = useCallback(() => {
		dispatch(addItemToCart(item));
	}, [dispatch, item]);

	return (
		<section className={styles.product}>
			
			<div className={styles.images}>
				<div
					className={styles.current}
					style={{ backgroundImage: `url(${currentImage})` }}
				/>
				<div className={styles['images-list']}>
					{images.map((image, i) => (
						<div
							key={i}
							className={styles.image}
							style={{ backgroundImage: `url(${image})` }}
							onClick={() => onClickSetCurrentImage(image)}
						/>
					))}
				</div>
			</div>

			<div className={styles.info}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.price}>{price} $</p>
				<div className={styles.color}>
					<span>Color:</span> Green
				</div>
				<div className={styles.sizes}>
					<span>Sizes: </span>
					<div className={styles.list}>
						{SIZES.map(size => (
							<div
								key={size}
								onClick={() => onClickSetSize(size)}
								className={`${styles.size} ${
									currentSize === size ? styles.active : ''
								}`}
							>
								{size}
							</div>
						))}
					</div>
				</div>

				<p className={styles.description}>{description}</p>

				<div className={styles.actions}>
					<Button
						onClick={onClickAddCart}
						className={styles.add}
						disabled={!currentSize}
					>
						Add to cart
					</Button>
					<Button className={styles.favorites}>Add to favorites</Button>
				</div>

				<div className={styles.bottom}>
					<div className={styles.purchase}>19 people purchased</div>
					<Link to={ROUTES.HOME}>Return to store</Link>
				</div>
			</div>
		</section>
	);
});

export default Product;
