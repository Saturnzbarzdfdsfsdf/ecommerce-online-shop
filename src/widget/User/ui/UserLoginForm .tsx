import React from 'react';

import { loginUser } from '../../../redux/user/userSlice';

import styles from './User.module.css';
import { useAppDispatch } from '../../../redux/store';

// Определяем интерфейс для пропсов компонента
interface UserLoginFormProps {
	toggleCurrentFormType: (type: 'signup' | 'login') => void;
	closeForm: () => void;
}

// Определяем интерфейс для значений формы
interface FormValues {
	email: string;
	password: string;
}

const UserLoginForm: React.FC<UserLoginFormProps> = ({
	toggleCurrentFormType,
	closeForm,
}) => {
	const dispatch = useAppDispatch();

	const [values, setValue] = React.useState<FormValues>({
		email: '',
		password: '',
	});

	// Обработка изменений полей ввода
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

		dispatch(loginUser(values));
		closeForm();
	};

	return (
		<div className={styles.wrapper}>
			<div onClick={closeForm} className={styles.close}>
				<svg className='icon'>
					<use xlinkHref={`sprite.svg#close`} />
				</svg>
			</div>

			<div className={styles.title}>Login</div>

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
						value={values.password}
						name='password'
						type='password'
						placeholder='Your password'
						autoComplete='off'
						required
					/>
				</div>
				<div
					className={styles.link}
					onClick={() => toggleCurrentFormType('signup')}
				>
					Create an account
				</div>
				<button type='submit' className={styles.submit}>
					Login
				</button>
			</form>
		</div>
	);
};

export default UserLoginForm;

