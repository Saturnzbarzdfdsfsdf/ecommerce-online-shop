import React from 'react';

import { createUser } from '../../../redux/user/userSlice';

import { useAppDispatch } from '../../../redux/store';

import { IUserFormProps, IFormUserValues } from '../../../shared/types';

import styles from './User.module.css';

const UserSignupForm: React.FC<IUserFormProps> = ({
	toggleCurrentFormType,
	closeForm,
}) => {
	const dispatch = useAppDispatch();

	const [values, setValue] = React.useState<IFormUserValues>({
		name: '',
		email: '',
		password: '',
		avatar:
			'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
	});

	// Обработка изменений полей ввода
	const handleChange = ({
		target: { value, name },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setValue({ ...values, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Проверка на заполненность полей
		const isNotEmpty = Object.values(values).every(val => val);
		// Если поля не заполнены, то выйти из кода
		if (!isNotEmpty) return;

		// Если заполнены, то отправляю в redux
		dispatch(createUser(values));
		closeForm();
	};

	return (
		<div className={styles.wrapper}>
			<div onClick={closeForm} className={styles.close}>
				<svg className='icon'>
					<use xlinkHref={`sprite.svg#close`} />
				</svg>
			</div>

			<div className={styles.title}>Sign UP</div>

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

				<div
					className={styles.link}
					onClick={() => toggleCurrentFormType('login')}
				>
					I already have an account
				</div>
				<button type='submit' className={styles.submit}>
					Create an account
				</button>
			</form>
		</div>
	);
};

export default UserSignupForm;
