import React from 'react';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


import { RootState } from '../../../redux/store'; 

import styles from './Sidebar.module.css';


interface Category {
	id: string; 
	name: string;
}

const Sidebar: React.FC = () => {
	const { list } = useSelector((state: RootState) => state.categories);

	return (
		<section className={styles.sidebar}>
			<div className={styles.title}>CATEGORIES</div>
			<nav>
				<ul className={styles.menu}>
					{list.map(({ id, name }: Category) => (
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
					))}
				</ul>
			</nav>

			<div className={styles.footer}>
				<a className={styles.link} href='#'>
					Help
				</a>
				<a
					className={styles.link}
					href='#'
					style={{ textDecoration: 'underline' }}
				>
					Terms & Conditions
				</a>
			</div>
		</section>
	);
};

export default Sidebar;

