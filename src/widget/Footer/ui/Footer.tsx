import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../shared/consts/routes';

import LOGO from '../../../shared/assets/img/logo.svg';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
	return (
		<section className={styles.footer}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt='logo' />
				</Link>
			</div>

			<div className={styles.rights}>
				development by <a href='#'>saturn</a>
			</div>

			<div className={styles.socials}>
				<a
					href='https://instagram.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<svg className='icon'>
						<use xlinkHref={'sprite.svg#instagram'} />
					</svg>
				</a>

				<a
					href='https://facebook.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<svg className='icon'>
						<use xlinkHref={'sprite.svg#facebook'} />
					</svg>
				</a>

				<a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
					<svg className='icon'>
						<use xlinkHref={'sprite.svg#youtube'} />
					</svg>
				</a>
			</div>
		</section>
	);
};

export default Footer;
