import { FC } from 'react';

import styles from '../Product.module.css';

interface IProductSize {
	sizes: number[];
	currentSize: number | null;
	onSetSize: (size: number) => void;
}

const SizeSelector: FC<IProductSize> = ({ sizes, currentSize, onSetSize }) => (
	<div className={styles.sizes}>
		<span>Sizes: </span>
		<div className={styles.list}>
			{sizes.map(size => (
				<div
					key={size}
					onClick={() => onSetSize(size)}
					className={`${styles.size} ${
						currentSize === size ? styles.active : ''
					}`}
				>
					{size}
				</div>
			))}
		</div>
	</div>
);

export default SizeSelector;
