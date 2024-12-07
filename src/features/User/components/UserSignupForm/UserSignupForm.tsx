import React from 'react';
import { useForm } from 'react-hook-form';

import { createUser } from '../../../../redux/user/userSlice';

import { useAppDispatch } from '../../../../redux/store';
import { IUserFormProps, IFormUserValues } from '../../../../shared/types';

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
				{errors.email && <div>{errors.email.message}</div>}
			</div>

			<div className={styles.group}>
				<input
					type='text'
					placeholder='Your name'
					autoComplete='off'
					{...register('name', { required: 'Name is required' })}
				/>
				{errors.name && <div>{errors.name.message}</div>}
			</div>

			<div className={styles.group}>
				<input
					type='password'
					placeholder='Your password'
					autoComplete='off'
					{...register('password', { required: 'Password is required' })}
				/>
				{errors.password && <div>{errors.password.message}</div>}
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
				{errors.avatar && <div>{errors.avatar.message}</div>}
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
	);
};

export default UserSignupForm;
