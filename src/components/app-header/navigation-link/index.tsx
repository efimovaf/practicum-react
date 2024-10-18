import React from 'react';
import style from './navigation-link.module.scss';

export interface INavigationLink {
	label: string;
	icon: React.JSX.Element;
}

const NavigationLink: React.FC<INavigationLink> = ({ label, icon }) => (
	<div className={`pl-5 pr-5 pb-4 pt-4 ${style.navigationLink}`}>
		{icon}
		<p className='text text_type_main-default'>{label}</p>
	</div>
);

export default NavigationLink;
