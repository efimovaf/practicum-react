import React from 'react';
import style from './navigation-link.module.scss';

export interface INavigationLink {
	isActive: boolean;
	label: string;
	icon: React.JSX.Element;
	dataCy?: string;
}

const NavigationLink: React.FC<INavigationLink> = ({
	label,
	icon,
	isActive,
	dataCy,
}) => (
	<div className={`pl-5 pr-5 pb-4 pt-4 ${style.navigationLink}`}>
		{icon}
		<p
			data-cy={dataCy}
			className={`text text_type_main-default ${
				!isActive && 'text_color_inactive'
			}`}>
			{label}
		</p>
	</div>
);

export default NavigationLink;
