import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../shared/lib/Hook/Hooks';

import { updateUserThunk } from '../../../entities/user/model/userThunks';

// import AVATAR from '../../../shared/assets/img/avatar.jpg';

import { IUser } from '../../../shared/api/user/userTypes';

import styles from './Profile.module.css';

interface IUserState {
	currentUser: IUser | null;
}

const Profile: React.FC = () => {
	const dispatch = useAppDispatch();

	const { currentUser } = useSelector(
		(state: { user: IUserState }) => state.user
	);

	// const [values, setValue] = useState<IUser>({
	// 	id: '',
	// 	name: 'Tester59',
	// 	email: 'tester01@gmail.com',
	// 	password: 'Tester59',
	// 	avatar:
	// 		'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
	// });

	const [values, setValue] = useState<IUser>({
		id: 0,
		email: '',
		password: '',
		name: '',
		avatar: '',
		role: '',
		creationAt: '',
		updatedAt: '',
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

		const isNotEmpty = Object.values(values).every(val => val);
		if (!isNotEmpty) return;

		const payload = {
			id: values.id,
			data: {
				name: values.name,
				email: values.email,
				password: values.password,
				avatar: values.avatar,
				role: values.role,
				creationAt: values.creationAt,
				updatedAt: values.updatedAt,
			},
		};

		dispatch(updateUserThunk(payload));
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
							type='text'
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
							type='text'
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
