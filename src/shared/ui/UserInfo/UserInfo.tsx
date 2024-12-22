import React from 'react'

import AVATAR from '../../assets/img/guest.jpg';

import styles from './UserInfo.module.css'

interface User {
	name: string
	avatar: string
}

interface UserInfoProps {
	user: User | null
	onProfileClick: () => void
}

const UserInfo: React.FC<UserInfoProps> = ({ user, onProfileClick }) => {
	const values = user || { name: 'Guest', avatar: AVATAR }

	return (
		<div className={styles.user} onClick={onProfileClick}>
			<div
				className={styles.avatar}
				style={{ backgroundImage: `url(${values.avatar})` }}
			/>
			<div className={styles.username}>{values.name}</div>
		</div>
	)
}

export default UserInfo
