import { useState, FC, useEffect } from 'react';

import { useAppDispatch } from '../../../redux/store';
import { Link } from 'react-router-dom';

import { addItemToCart } from '../../../redux/user/userSlice';
import { ROUTES } from '../../../shared/consts/routes';

import styles from './Product.module.css';

// Определяем интерфейс для продукта
interface ProductItem {
	id: string;
	images: string[];
	title: string;
	price: number;
	description: string;
}

// Определяем интерфейс для пропсов компонента Product
interface ProductProps {
	item: ProductItem;
}

const SIZES = [42, 46, 48, 50, 52];

const Product: FC<ProductProps> = ( item ) => {

	const { images, title, price, description } = item;

	const dispatch = useAppDispatch();

	const [currentImage, setCurrentImage] = useState<string | null>(null);
	const [currentSize, setCurrentSize] = useState<number | null>(null);

	useEffect(() => {
		if (images.length > 0) {
			setCurrentImage(images[0]);
		}
	}, [images]);

	const addToCart = () => {
		dispatch(addItemToCart(item));
	};

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
							onClick={() => setCurrentImage(image)}
						/>
					))}
				</div>
			</div>
			<div className={styles.info}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.price}>{price} $</div>
				<div className={styles.color}>
					<span>Color:</span> Green
				</div>
				<div className={styles.sizes}>
					<span>Sizes: </span>
					<div className={styles.list}>
						{SIZES.map(size => (
							<div
								key={size}
								onClick={() => setCurrentSize(size)}
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
					<button
						onClick={addToCart}
						className={styles.add}
						disabled={!currentSize}
					>
						Add to cart
					</button>
					<button className={styles.favorites}>Add to favorites</button>
				</div>

				<div className={styles.bottom}>
					<div className={styles.purchase}>19 people purchased</div>
					<Link to={ROUTES.HOME}>Return to store</Link>
				</div>
			</div>
		</section>
	);
};

export default Product;
