import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Categories.module.css';

// Определяем интерфейс для продукта
export interface IProduct {
	id: string;
	name: string;
	image: string;
}

// Определяем интерфейс для пропсов компонента
interface ICategoriesProps {
	title: string;
	products?: IProduct[];
	amount: number;
}

const Categories: React.FC<ICategoriesProps> = ({
	title,
	products = [],
	amount,
}) => {
	// Фильтруем список продуктов, чтобы он не превышал amount
	const list = products.filter((_, i) => i < amount);

	return (
		<section className={styles.section}>
			<h2>{title}</h2>
			<ul className={styles.list}>
				{list.map(({ id, name, image }) => (
					<li key={id}>
						<Link to={`/categories/${id}`} className={styles.item}>
							<img className={styles.image} src={image} />
							<h3 className={styles.title}>{name}</h3>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Categories;

// import { Link } from 'react-router-dom';

// import styles from './Categories.module.css';

// const Categories = ({ title, products = [], amount }) => {
// 	// фильтруем наш список продуктов чтобы не превышал amount(количество)
// 	const list = products.filter((_, i) => i < amount);

// 	return (
// 		<section className={styles.section}>
// 			<h2> {title} </h2>

// 			<div className={styles.list}>
// 				{list.map(({ id, name, image }) => (
// 					<Link to={`/categories/${id}`} key={id} className={styles.item}>
// 						<div
// 							className={styles.image}
// 							style={{ backgroundImage: `url(${image})` }}
// 						/>
// 						<h3 className={styles.title}>{name}</h3>
// 					</Link>
// 				))}
// 			</div>

// 		</section>
// 	);
// };

// export default Categories;
