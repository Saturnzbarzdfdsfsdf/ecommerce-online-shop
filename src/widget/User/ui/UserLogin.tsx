import { FC } from 'react';

import { IUserFormProps } from '../../../entities/user/index';

import { UserLoginFrom } from '../../../features/User/index';

import styles from './User.module.css';

const UserLogin: FC<IUserFormProps> = ({
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

			<div className={styles.title}>Login</div>

			<UserLoginFrom
				toggleCurrentFormType={toggleCurrentFormType}
				closeForm={closeForm}
			/>
		</div>
	);
};

export default UserLogin;
