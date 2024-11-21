import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../images/error-404.png';
import style from './not-found.module.scss';

const NotFound: React.FC = () => (
	<div className={style.wrapper}>
		<div className={style.container}>
			<div className={style.content}>
				<h1>Oops! 404 Error</h1>
				<img alt='Oops! 404 Error' src={error404} className={style.img}/>

				<Link to='/'>перейти на главную страницу</Link>
			</div>
		</div>
	</div>
);

export default NotFound;
