import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../redux/store';

import { updateUser } from '../../../redux/user/userSlice';

import styles from './Profile.module.css';


interface IUser {
	id: string; // Сделаем id обязательным
	name: string;
	email: string;
	password: string;
	avatar: string;
}

interface IUserState {
	currentUser: IUser | null;
}

const Profile: React.FC = () => {
	const dispatch = useAppDispatch();

	const { currentUser } = useSelector(
		(state: { user: IUserState }) => state.user
	);

	const [values, setValue] = useState<IUser>({
		id: '',
		name: '',
		email: '',
		password: '',
		avatar:
			'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
	});

	useEffect(() => {
		if (!currentUser) return;

		setValue(currentUser);
	}, [currentUser]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setValue(prevValues => ({
			...prevValues,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Проверка наличия id перед отправкой
		if (!values.id) {
			console.error('ID is required for updating user.');
			return;
		}

		// Проверка на заполненность полей
		const isNotEmpty = Object.values(values).every(val => val);
		if (!isNotEmpty) return;

		// Если заполнены, то отправляю в redux
		dispatch(updateUser(values));
	};

	return (
		<section className={styles.profile}>
			{!currentUser ? (
				<span>You need to login</span>
			) : (
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.group}>
						<input
							onChange={handleChange}
							value={values.email}
							type='email'
							name='email'
							placeholder='Your email'
							autoComplete='off'
							required
						/>
					</div>

					<div className={styles.group}>
						<input
							onChange={handleChange}
							value={values.name}
							type='text' // Исправлено с 'name' на 'text'
							name='name'
							placeholder='Your name'
							autoComplete='off'
							required
						/>
					</div>

					<div className={styles.group}>
						<input
							onChange={handleChange}
							value={values.password}
							name='password'
							type='password'
							placeholder='Your password'
							autoComplete='off'
							required
						/>
					</div>

					<div className={styles.group}>
						<input
							onChange={handleChange}
							value={values.avatar}
							type='text' // Исправлено с 'avatar' на 'text'
							name='avatar'
							placeholder='Your avatar'
							autoComplete='off'
							required
						/>
					</div>

					<button type='submit' className={styles.submit}>
						update profile
					</button>
				</form>
			)}
		</section>
	);
};

export default Profile;
