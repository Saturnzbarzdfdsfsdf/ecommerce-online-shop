import React from 'react';
import { useForm } from 'react-hook-form';

import { createUserThunk } from '../../../../entities/user/model/userThunks';

import { useAppDispatch } from '../../../../shared/lib/Hook/Hooks';

import { IUserFormProps } from '../../../../entities/user/model/userTypes';

import { IUser } from '../../../../shared/api/user/userTypes';

import { Button } from '../../../../shared/ui/Button/index';

import styles from '../UserComponentsForm.module.css';

const UserSignupForm: React.FC<IUserFormProps> = ({
	toggleCurrentFormType,
	closeForm,
}) => {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUser>();

	const onSubmit = (data: IUser) => {
		dispatch(createUserThunk(data));
		closeForm();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.group}>
				<input
					value='Tester21@gmail.comm'
					type='email'
					placeholder='Your email'
					autoComplete='off'
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: 'На правильно указана почта',
						},
					})}
				/>
				{errors.email && (
					<div className={styles.errorMes}>{errors.email.message}</div>
				)}
			</div>

			<div className={styles.group}>
				<input
					value='Tester'
					type='text'
					placeholder='Your name'
					autoComplete='off'
					{...register('name', { required: 'Name is required' })}
				/>
				{errors.name && (
					<div className={styles.errorMes}>{errors.name.message}</div>
				)}
			</div>

			<div className={styles.group}>
				<input
					value='Tester221'
					type='password'
					placeholder='Your password'
					autoComplete='off'
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Пароль должен содержать минимум 6 символов',
						},
						maxLength: {
							value: 20,
							message: 'Пароль не должен превышать 20 символов',
						},
						validate: value =>
							/^(?=.*[A-Za-z])(?=.*\d)/.test(value ?? '') ||
							'Пароль должен содержать как буквы, так и цифры',
					})}
				/>
				{errors.password && (
					<div className={styles.errorMes}>{errors.password.message}</div>
				)}
			</div>

			<div className={styles.group}>
				<input
					type='text'
					// name='avatar'
					placeholder='Your avatar URL'
					autoComplete='off'
					defaultValue='https://www.sport-interfax.ru/ftproot/photos/photostory/2019/07/09/week4_700.jpg'
					{...register('avatar', { required: 'Avatar URL is required' })}
				/>
				{errors.avatar && (
					<div className={styles.errorMes}>{errors.avatar.message}</div>
				)}
			</div>

			<div
				className={styles.link}
				onClick={() => toggleCurrentFormType('login')}
			>
				I already have an account
			</div>
			<Button type='submit' className={styles.submit}>
				Create an account
			</Button>
		</form>
	);
};

export default UserSignupForm;
