import { FC } from 'react';

import styles from '../Product.module.css';

interface IProductImage {
	images?: string[];
	currentImage: string | null;
	onSetCurrentImage: (image: string) => void;
}

const ImageGallery: FC<IProductImage> = ({
	images,
	currentImage,
	onSetCurrentImage,
}) => {
	if (!images || images.length === 0) {
		return <div>No images available</div>;
	}
	return (
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
						onClick={() => onSetCurrentImage(image)}
					/>
				))}
			</div>
		</div>
	);
};

export default ImageGallery;
