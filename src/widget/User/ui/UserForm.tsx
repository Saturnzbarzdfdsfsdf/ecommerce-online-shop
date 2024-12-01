import React from 'react';

import { useSelector } from 'react-redux';

import { toggleForm, toggleFormType } from '../../../redux/user/userSlice';

import UserSignupForm from './UserSignupForm';
import UserLoginForm from './UserLoginForm ';

import styles from './User.module.css';
import { useAppDispatch } from '../../../redux/store';

interface UserState {
	showForm: boolean;
	formType: 'signup' | 'login';
}

const UserForm: React.FC = () => {
	const dispatch = useAppDispatch();

	const { showForm, formType } = useSelector(
		(state: { user: UserState }) => state.user
	);

	const closeForm = () => dispatch(toggleForm(false));
	
	const toggleCurrentFormType = (type: 'signup' | 'login') =>
		dispatch(toggleFormType(type));

	return showForm ? (
		<>
			<div 
			onClick={closeForm}
			className={styles.overlay} 
			>
			</div>

			{formType === 'signup' ? (
				<UserSignupForm
					toggleCurrentFormType={toggleCurrentFormType}
					closeForm={closeForm}
				/>
			) : (
				<UserLoginForm
					toggleCurrentFormType={toggleCurrentFormType}
					closeForm={closeForm}
				/>
			)}
		</>
	) : null;
};

export default UserForm;
