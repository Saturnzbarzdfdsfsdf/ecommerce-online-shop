import React from 'react';

import { createUser } from '../../../redux/user/userSlice';

import styles from './User.module.css';
import { useAppDispatch } from '../../../redux/store';

// Определяем интерфейс для пропсов компонента
interface UserSignupFormProps {
	toggleCurrentFormType: (type: 'signup' | 'login') => void;
	closeForm: () => void;
}

// Определяем интерфейс для значений формы
interface FormValues {
	name: string;
	email: string;
	password: string;
	avatar: string;
}

const UserSignupForm: React.FC<UserSignupFormProps> = ({
	toggleCurrentFormType,
	closeForm,
}) => {
	const dispatch = useAppDispatch();

	const [values, setValue] = React.useState<FormValues>({
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
						type='text' // Исправлено на 'text' вместо 'name'
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
						type='text' // Исправлено на 'text' вместо 'avatar'
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
