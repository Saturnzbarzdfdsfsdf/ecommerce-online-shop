import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../shared/consts/routes';
import LOGO from '../../../shared/assets/img/React.svg';
import styles from './Footer.module.css';

// Импортируем иконки из Material-UI
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
					<InstagramIcon className='icon' />
				</a>

				<a
					href='https://facebook.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FacebookIcon className='icon' />
				</a>

				<a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
					<YouTubeIcon className='icon' />
				</a>
			</div>
		</section>
	);
};

export default Footer;
