import React, { useState, FC, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../../redux/store';
import { addItemToCart } from '../../../redux/user/userSlice';

import { ROUTES } from '../../../shared/consts/routes';

import { ImageGallery, SizeSelector, ProductInfo, Actions } from '../index';

// import { Button } from '../../../shared/ui/button/index';

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
			<ImageGallery
				images={images}
				currentImage={currentImage}
				onSetCurrentImage={onClickSetCurrentImage}
			/>
			<div className={styles.info}>
				<ProductInfo 
				title={title} 
				price={price} 
				description={description} 
				/>

				<SizeSelector
					sizes={SIZES}
					currentSize={currentSize}
					onSetSize={onClickSetSize}
				/>
				
				<Actions 
				onAddToCart={onClickAddCart} 
				disabled={!currentSize} 
				/>

				<div className={styles.bottom}>
					<div className={styles.purchase}>19 people purchased</div>
					<Link to={ROUTES.HOME}>Return to store</Link>
				</div>
			</div>

		</section>

	);
});

export default Product;
