import { FC } from 'react';

import { Button } from '../../../../shared/ui/Button';

import styles from '../Product.module.css';

interface IActions {
	onAddToCart: () => void;
	disabled: boolean;
}

const Actions: FC<IActions> = ({ onAddToCart, disabled }) => (
	<div className={styles.actions}>
		<Button onClick={onAddToCart} className={styles.add} disabled={disabled}>
			Add to cart
		</Button>
		<Button className={styles.favorites}>Add to favorites</Button>
	</div>
);

export default Actions;
