import React from 'react';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Импортируйте тип корневого состояния
import { RootState } from '../../../redux/store'; 

import styles from './Sidebar.module.css';

// Определяем тип для категории
interface Category {
	id: string; // Или string, в зависимости от вашего API
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
					Terms & Conditions{' '}
				</a>
			</div>
		</section>
	);
};

export default Sidebar;

// import React from 'react'

// // Расширенная версия Link (можем добавить стили)
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import styles from './Sidebar.module.css';

// const Sidebar = () => {
// 	const { list } = useSelector(({ categories }) => categories);

// 	return (
// 		<section className={styles.sidebar}>
// 			<div className={styles.title}>CATEGORIES</div>
// 			<nav>
// 				<ul className={styles.menu}>
// 					{/* мапим наш список категорий */}
// 					{list.map(({ id, name }) => (
// 						<li key={id}>
// 							{/* у NavLink есть isActive если true то вешаем стили */}
// 							<NavLink
// 								className={({ isActive }) =>
// 									`${styles.link} ${isActive ? styles.active : ''}`.trim()
// 								}
// 								to={`/categories/${id}`}
// 							>
// 								{name}
// 							</NavLink>
// 						</li>
// 					))}
// 				</ul>
// 			</nav>

// 			<div className={styles.footer}>
// 				<a className={styles.link} href='#'>
// 					Help
// 				</a>
// 				<a
// 					className={styles.link}
// 					href='#'
// 					style={{ textDecoration: 'underline' }}
// 				>
// 					Terms & Conditions{' '}
// 				</a>
// 			</div>
// 		</section>
// 	);
// };

// export default Sidebar;
