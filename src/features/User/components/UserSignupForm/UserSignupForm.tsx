import React from 'react';
import { useForm } from 'react-hook-form';

import { createUser } from '../../../../redux/user/userSlice';

import { useAppDispatch } from '../../../../redux/store';
import { IUserFormProps, IFormUserValues } from '../../../../shared/types';

import { Button } from '../../../../shared/ui/Button';

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
	} = useForm<IFormUserValues>();

	const onSubmit = (data: IFormUserValues) => {
		dispatch(createUser(data));
		closeForm();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.group}>
				<input
					type='email'
					placeholder='Your email'
					autoComplete='off'
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: 'Invalid email address',
						},
					})}
				/>
				{errors.email && (
					<div className={styles.errorMes}>{errors.email.message}</div>
				)}
			</div>

			<div className={styles.group}>
				<input
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
					type='password'
					placeholder='Your password'
					autoComplete='off'
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Password must be at least 6 characters long',
						},
						maxLength: {
							value: 20,
							message: 'Password cannot exceed 20 characters',
						},
						validate: value =>
							/^(?=.*[A-Za-z])(?=.*\d)/.test(value) ||
							'Password must contain both letters and numbers',
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
					defaultValue='https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'
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
