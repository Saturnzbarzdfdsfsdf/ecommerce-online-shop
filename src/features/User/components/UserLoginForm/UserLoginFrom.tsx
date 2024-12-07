import { FC } from 'react';

import { useForm } from 'react-hook-form';

import { useAppDispatch } from '../../../../redux/store';

import { loginUser } from '../../../../redux/user/userSlice';

import { IUserFormProps, IFormUserValues } from '../../../../shared/types/index';


type TUserLogin = Pick<IFormUserValues, 'email' | 'password'>;

import styles from '../UserComponentsForm.module.css';

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
		dispatch(loginUser(data));
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
			<button type='submit' className={styles.submit}>
				Login
			</button>
		</form>
	);
};

export default UserLoginFrom;