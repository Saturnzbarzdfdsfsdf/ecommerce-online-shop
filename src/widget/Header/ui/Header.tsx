import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../shared/consts/routes';
import { toggleForm } from '../../../redux/user/userSlice';

import { useGetProductsQuery } from '../../../redux/api/apiSlice';

import { CartIcon, SearchBar, UserInfo } from '../../../shared/ui/index'

import { useAppDispatch } from '../../../redux/store';

import LOGO from '../../../shared/assets/img/logo.svg';
import AVATAR from '../../../shared/assets/img/avatar.jpg';

import styles from './Header.module.css';

interface User {
	name: string;
	avatar: string;
}

// interface Product {
// 	id: string;
// 	title: string;
// 	images: string[];
// }

interface RootState {
	user: {
		currentUser: User | null;
		cart: Array<{ id: string; quantity?: number }>;
	};
}

const Header: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [searchValue, setSearchValue] = useState<string>('');
	const { data = [], isLoading } = useGetProductsQuery({ title: searchValue });

	const { currentUser, cart } = useSelector((state: RootState) => state.user);
	
	const [values, setValues] = useState<User>({
		name: 'Guest',
		avatar: AVATAR,
	});

	useEffect(() => {
		if (!currentUser) return;

		setValues(currentUser);
	}, [currentUser]);

	const onProfileClick = () => {
		if (!currentUser) {
			dispatch(toggleForm(true))
		} else {
			navigate(ROUTES.PROFILE)
		}
	}

	// Следит за input
	// const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setSearchValue(event.target.value);
	// };

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt='logo' />
				</Link>
			</div>

			<div className={styles.info}>
				<UserInfo user={values} onProfileClick={onProfileClick} />

				<SearchBar
					data={data}
					isLoading={isLoading}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>

				<CartIcon cartCount={cart} />

			</div>
		</div>
	)
};

export default Header;


// <div className={styles.header}>
// 	<div className={styles.logo}>
// 		<Link to={ROUTES.HOME}>
// 			<img src={LOGO} alt='logo' />
// 		</Link>
// 	</div>

// 	<div className={styles.info}>

// 		<div className={styles.user} onClick={handleClick}>
// 			<div
// 				className={styles.avatar}
// 				style={{ backgroundImage: `url(${values.avatar})` }}
// 			/>
// 			<div className={styles.username}>{values.name}</div>
// 		</div>

// 		<form className={styles.form}>
// 			<div className={styles.icon}>
// 				<svg className='icon'>
// 					<use xlinkHref={'sprite.svg#search'} />
// 				</svg>
// 			</div>
// 			<div className={styles.input}>
// 				<input
// 					type='search'
// 					name='search'
// 					placeholder='search for anything'
// 					autoCapitalize='on'
// 					value={searchValue}
// 					onChange={handleSearch}
// 				/>
// 			</div>

// 			{/* Условный рендеринг результатов поиска */}
// 			{searchValue && (
// 				<div className={styles.box}>
// 					{isLoading
// 						? 'Loading'
// 						: !data.length
// 						? 'No results'
// 						: data.map(({ title, images, id }: Product) => (
// 								<Link
// 									onClick={() => setSearchValue('')}
// 									className={styles.item}
// 									to={`products/${id}`}
// 									key={id}
// 								>
// 									<div
// 										className={styles.image}
// 										style={{ backgroundImage: `url(${images[0]})` }}
// 									></div>
// 									<div className={styles.title}>{title}</div>
// 								</Link>
// 						  ))}
// 				</div>
// 			)}
// 		</form>

// 		<div className={styles.account}>
// 			<Link className={styles.favorites} to={ROUTES.HOME}>
// 				<svg className={styles['icon-fav']}>
// 					<use xlinkHref={'sprite.svg#heart'} />
// 				</svg>
// 			</Link>

// 			<Link className={styles.cart} to={ROUTES.CART}>
// 				<svg className={styles['icon-cart']}>
// 					<use xlinkHref={'sprite.svg#bag'} />
// 				</svg>

// 				{!!cart.length && <span className={styles.count}> {cart.length} </span>}
// 			</Link>
// 		</div>
// 	</div>
// </div>
