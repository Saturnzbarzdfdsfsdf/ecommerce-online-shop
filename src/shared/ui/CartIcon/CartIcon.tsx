import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { ICart } from '../../../features/Cart';
import { IconButton } from '@mui/material';

import styles from './CartIcon.module.css';

const CartIcon: FC<ICart> = ({ cartCount }) => {
	const navigate = useNavigate();

	const totalQuantity = Array.isArray(cartCount)
		? cartCount.reduce((acc, item) => acc + (item.quantity || 0), 0)
		: 0;

	const handleFavoritesClick = () => {
		navigate('/favorites');
	};

	const handleCartClick = () => {
		navigate('/cart');
	};

	return (
		<div className={styles.account}>
			<IconButton onClick={handleFavoritesClick} aria-label='favorite'>
				<FavoriteBorderOutlinedIcon />
			</IconButton>

			<IconButton onClick={handleCartClick} aria-label='delete'>
				<ShoppingBagOutlinedIcon />
				{totalQuantity > 0 && (
					<span className={styles.count}>{totalQuantity}</span>
				)}
			</IconButton>
		</div>
	);
};

export default CartIcon;
