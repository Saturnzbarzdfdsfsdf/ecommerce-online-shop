import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { ICategory } from '../../../../shared/api/product';

import styles from '../Sidebar.module.css';

type TCategoryName = Pick<ICategory, 'id' | 'name'>

const SideCategoryItem: FC<TCategoryName> = ({ id, name }) => {
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
