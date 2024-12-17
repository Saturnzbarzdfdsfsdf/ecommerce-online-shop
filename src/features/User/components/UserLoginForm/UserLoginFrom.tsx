import { FC } from 'react';

import { useForm } from 'react-hook-form';

import { useAppDispatch } from '../../../../shared/lib/Hook/Hooks';

import { loginUserThunk } from '../../../../entities/user/model/userThunks';

import { IUserFormProps } from '../../../../entities/user/index';

import { IUser } from '../../../../shared/api/user/index';

import { Button } from '../../../../shared/ui/Button';

import styles from '../UserComponentsForm.module.css';

type TUserLogin = Pick<IUser, 'email' | 'password'>;

const UserLoginFrom: FC<IUserFormProps> = ({
	closeForm,
	toggleCurrentFormType,
}) => {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TUserLogin>();

	const onSubmit = (data: TUserLogin) => {
		dispatch(loginUserThunk(data));
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
				{errors.password && <div>{errors.password.message}</div>}
			</div>

			<div
				className={styles.link}
				onClick={() => toggleCurrentFormType('signup')}
			>
				Create an account
			</div>
			<Button type='submit' className={styles.submit}>
				Login
			</Button>
		</form>
	);
};

export default UserLoginFrom;
