import { FC } from 'react';

import { IUserFormProps } from '../../../shared/types';
import { UserSignupForm } from '../../../features/User/index';

import styles from './User.module.css';

const UserSignup: FC<IUserFormProps> = ({
	toggleCurrentFormType,
	closeForm,
}) => {
	return (
		<div className={styles.wrapper}>
			<div onClick={closeForm} className={styles.close}>
				<svg className='icon'>
					<use xlinkHref={`sprite.svg#close`} />
				</svg>
			</div>

			<div className={styles.title}>Sign UP</div>

			<UserSignupForm
				toggleCurrentFormType={toggleCurrentFormType}
				closeForm={closeForm}
			/>
		</div>
	);
};

export default UserSignup;
