import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../Sidebar.module.css';

interface ISideBarCategory {
	id: string;
	name: string;
}
const SideCategoryItem: FC<ISideBarCategory> = ({ id, name }) => {
	return (
		<li key={id}>
			<NavLink
				className={({ isActive }) =>
					`${styles.link} ${isActive ? styles.active : ''}`.trim()
				}
				to={`/categories/${id}`}
			>
				{name}
			</NavLink>
		</li>
	);
};

export default SideCategoryItem;
