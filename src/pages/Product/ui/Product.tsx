import { useState, FC, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../../shared/lib/Hook/Hooks';
import { addItemToCart } from '../../../features/Cart/model/cartSlices';

import { ROUTES } from '../../../shared/consts/routes';

import { ImageGallery, SizeSelector, ProductInfo, Actions } from '../index';

import { ICartProduct } from '../../../features/Cart/index';

import styles from './Product.module.css';

const SIZES = [42, 46, 48, 50, 52];

const Product: FC<ICartProduct> = item => {
	const { images, title, price, description } = item;

	const dispatch = useAppDispatch();

	const [currentImage, setCurrentImage] = useState<string | null>(null);
	const [currentSize, setCurrentSize] = useState<number | null>(null);

	useEffect(() => {
		if (images.length > 0) {
			setCurrentImage(images[0]);
		}
	}, [images]);

	const onClickSetSize = (size: number | null) => {
		setCurrentSize(size);
	};

	const onClickSetCurrentImage = (image: string | null) => {
		setCurrentImage(image);
	};

	const onClickAddCart = () => {
		dispatch(addItemToCart(item));
	};

	return (
		<section className={styles.product}>
			<ImageGallery
				images={images}
				currentImage={currentImage}
				onSetCurrentImage={onClickSetCurrentImage}
			/>
			<div className={styles.info}>
				<ProductInfo title={title} price={price} description={description} />

				<SizeSelector
					sizes={SIZES}
					currentSize={currentSize}
					onSetSize={onClickSetSize}
				/>

				<Actions onAddToCart={onClickAddCart} disabled={!currentSize} />

				<div className={styles.bottom}>
					<span>19 people purchased</span>
					<Link to={ROUTES.HOME}>Return to store</Link>
				</div>
			</div>
		</section>
	);
};

export default Product;
