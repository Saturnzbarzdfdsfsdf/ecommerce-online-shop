import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../shared/lib/Hook/Hooks';
import { toggleForm } from '../../../entities/user/model/userSlice';

import { useGetProductsQuery } from '../../../redux/api/apiSlice';

import { CartIcon, SearchBar, UserInfo } from '../../../shared/ui/index';

import { ROUTES } from '../../../shared/consts/routes';

import { IUser } from '../../../shared/api/user/userTypes';

import { selectCart } from '../../../features/Cart';
import { selectCurrentUser } from '../../../entities/user/index';

import LOGO from '../../../shared/assets/img/React.svg';
import GUEST from '../../../shared/assets/img/guest.jpg';

import styles from './Header.module.css';

type TProfile = Pick<IUser, 'name' | 'avatar'>;

const Header: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [searchValue, setSearchValue] = useState<string>('');
	// const [isToggleFormOpen, setIsToggleFormOpen] = useState(false);
	const { data = [], isLoading } = useGetProductsQuery({ title: searchValue });

	const cart = useSelector(selectCart);
	const currentUser = useSelector(selectCurrentUser);

	const [values, setValues] = useState<TProfile>({
		name: 'Guest',
		avatar: GUEST,
	});

	useEffect(() => {
		if (!currentUser) return;

		setValues(currentUser);
	}, [currentUser]);

// вынести в стейт или убрать хедер стики

	// useEffect(() => {
	// 	if (isToggleFormOpen) {
	// 		document.body.style.overflow = 'hidden';
	// 	} else {
	// 		document.body.style.overflow = '';
	// 	}
	// 	// Чистка эффекта на размонтирование
	// 	return () => {
	// 		document.body.style.overflow = '';
	// 	};
	// }, [isToggleFormOpen]);

	const onProfileClick = () => {
		if (!currentUser) {
			dispatch(toggleForm(true));
			// setIsToggleFormOpen(true);
		} else {
			navigate(ROUTES.PROFILE);
			
		}
	};

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img className={styles.logoImg} src={LOGO} alt='logo' />
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
		</header>
	);
};

export default Header;
