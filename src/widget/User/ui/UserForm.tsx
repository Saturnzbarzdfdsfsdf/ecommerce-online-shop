import React from 'react';

import { useSelector } from 'react-redux';

import { toggleForm, toggleFormType } from '../../../redux/user/userSlice';


import UserSignupForm from './UserSignupForm'; 
import UserLoginForm from './UserLoginForm ';

import styles from './User.module.css';
import { useAppDispatch } from '../../../redux/store';

// Определяем интерфейс для состояния пользователя
interface UserState {
	showForm: boolean;
	formType: 'signup' | 'login';
}

// Определяем интерфейс для пропсов формы
// interface FormProps {
// 	toggleCurrentFormType: (type: 'signup' | 'login') => void;
// 	closeForm: () => void;
// }

const UserForm: React.FC = () => {
	const dispatch = useAppDispatch();

	// Используем типизацию для селектора
	const { showForm, formType } = useSelector(
		(state: { user: UserState }) => state.user
	);

	const closeForm = () => dispatch(toggleForm(false));
	const toggleCurrentFormType = (type: 'signup' | 'login') =>
		dispatch(toggleFormType(type));

	return showForm ? (
		<>
			<div className={styles.overlay} onClick={closeForm}></div>

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
	) : null; // Используем null вместо пустого фрагмента
};

export default UserForm;

// import { useSelector, useDispatch } from 'react-redux';
// import { toggleForm, toggleFormType } from '../../redux/user/userSlice';

// import UserSighupFrom from './UserSighupFrom';
// import UserLoginForm from './UserLoginForm ';

// import styles from './User.module.css';

// const UserForm = () => {
// 	const dispatch = useDispatch();

// 	const { showForm, formType } = useSelector(({ user }) => user);

// 	const closeForm = () => dispatch(toggleForm(false));
// 	const toggleCurrentFormType = type => dispatch(toggleFormType(type));

// 	return showForm ? (
// 		<>
// 			<div className={styles.overlay} onClick={closeForm}></div>

// 			{formType === 'signup' ? (
// 				<UserSighupFrom
// 					toggleCurrentFormType={toggleCurrentFormType}
// 					closeForm={closeForm}
// 				/>
// 			) : (
// 				<UserLoginForm
// 					toggleCurrentFormType={toggleCurrentFormType}
// 					closeForm={closeForm}
// 				/>
// 			)}
// 		</>
// 	) : (
// 		<></>
// 	);
// };

// export default UserForm;
