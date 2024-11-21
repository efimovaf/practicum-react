import React from 'react';
import style from './loader.module.scss';

interface ILoader {
	center?: boolean;
}

const Loader = ({ center }: ILoader) => {
	return (
		<div
			className={style.loadingScreen}
			style={{ position: center ? 'fixed' : 'unset' }}>
			<div className={style.loadingSpinner}></div>
		</div>
	);
};

export default Loader;

Loader.displayName = 'Loader';
