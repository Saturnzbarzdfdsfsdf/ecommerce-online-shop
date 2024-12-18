import React from 'react';

import { useSelector } from 'react-redux';

import SideCategoryItem from './SideCategoryItem';

import { selectCategories } from '../../../entities/categories';

import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
	
	const sideCategoryList = useSelector(selectCategories)

	return (
		<section className={styles.sidebar}>
			<div className={styles.title}>CATEGORIES</div>
			<nav>
				<ul className={styles.menu}>
					{sideCategoryList.map(category => (
						<SideCategoryItem key={category.id} {...category} />
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

