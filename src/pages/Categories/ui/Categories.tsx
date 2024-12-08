import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICategoriesProps } from '../../../shared/types';

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
							<img className={styles.image} src={image} alt={name} />
							<h3 className={styles.title}>{name}</h3>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Categories;
