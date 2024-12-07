import React from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../redux/store';

import { toggleForm, toggleFormType } from '../../../redux/user/userSlice';

import { IUserState } from '../../../shared/types/index';

import UserSignupForm from './UserSignup';
import UserLoginForm from './UserLogin';

import styles from './User.module.css';

const formComponents = {
	signup: UserSignupForm,
	login: UserLoginForm,
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
