import React from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../shared/lib/Hook/Hooks';

import { toggleForm, toggleFormType } from '../../../entities/user/model/userSlice';

import { IUserState } from '../../../shared/types/index';

import UserSignup from './UserSignup';
import UserLogin from './UserLogin';

import styles from './User.module.css';

const formComponents = {
	signup: UserSignup,
	login: UserLogin,
};

const UserForm: React.FC = () => {
	const dispatch = useAppDispatch();

	const { showForm, formType } = useSelector(
		(state: { user: IUserState }) => state.user
	);

	const onClickCloseForm = () => dispatch(toggleForm(false));

	const toggleCurrentFormType = (type: 'signup' | 'login') =>
		dispatch(toggleFormType(type));

	if (!showForm) return null;

	const FormComponent = formComponents[formType];

	return (
		<>
			<div onClick={onClickCloseForm} className={styles.overlay}></div>

			<FormComponent
				toggleCurrentFormType={toggleCurrentFormType}
				closeForm={onClickCloseForm}
			/>
		</>
	);
};

export default UserForm;
