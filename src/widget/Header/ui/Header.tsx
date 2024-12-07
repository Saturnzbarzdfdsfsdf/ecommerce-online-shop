import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../redux/store';

import { Link, useNavigate } from 'react-router-dom';

import { toggleForm } from '../../../redux/user/userSlice';

import { useGetProductsQuery } from '../../../redux/api/apiSlice';

import { CartIcon, SearchBar, UserInfo } from '../../../shared/ui/index'


import { ROUTES } from '../../../shared/consts/routes';

import { IUser } from '../../../shared/types';

import LOGO from '../../../shared/assets/img/logo.svg';
import AVATAR from '../../../shared/assets/img/avatar.jpg';

import styles from './Header.module.css';

interface RootState {
	user: {
		currentUser: IUser | null;
		cart: Array<{ id: string; quantity?: number }>;
	};
}

const Header: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [searchValue, setSearchValue] = useState<string>('');

	const { data = [], isLoading } = useGetProductsQuery({ title: searchValue });

	const { currentUser, cart } = useSelector((state: RootState) => state.user);
	
	const [values, setValues] = useState<IUser>({
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
