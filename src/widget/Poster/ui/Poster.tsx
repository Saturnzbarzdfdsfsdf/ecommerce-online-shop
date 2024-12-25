import { FC } from 'react';

import BG from '../../../shared/assets/img/image-Photoroom.png';

import styles from './Poster.module.css';

const Poster: FC = () => {
	return (
		<section className={styles.home}>
			<div className={styles.title}>BIG Sale 50%</div>
			<div className={styles.product}>
				<div className={styles.text}>
					<div className={styles.subtitle}>The biggest sale in 2024</div>
					<h1 className={styles.head}>sneakers for all tastes</h1>
					<button className={styles.button}>Show now</button>
				</div>
				<div className={styles.image}>
					<img src={BG} alt='computer' />
				</div>
			</div>
		</section>
	);
};

export default Poster;
