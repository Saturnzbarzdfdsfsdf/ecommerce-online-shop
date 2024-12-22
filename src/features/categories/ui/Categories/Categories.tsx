import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICategoriesProps } from '../../../../entities/categories/index';

import styles from './Categories.module.css';

const Categories: FC<ICategoriesProps> = ({
	title,
	products = [],
	amount = 0,
}) => {
	const list = products.slice(0, Math.max(amount, 0));

	if (list.length === 0) {
		return <p>No categories available.</p>;
	}

	return (
		<section className={styles.section}>
			<h2>{title}</h2>
			<ul className={styles.list}>
				{list.map(({ id, name, image }) => (
					<li key={id}>
						<Link to={`/categories/${id}`} className={styles.item}>
							<div className={styles.imageWrapper}>
								<img className={styles.image} src={image} alt={name} />
							</div>
							<h3 className={styles.title}>{name}</h3>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Categories;
